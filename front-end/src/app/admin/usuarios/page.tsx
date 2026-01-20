"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { User, CarFront, ShieldUser, UserRoundPlus } from "lucide-react"

import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings"
import AdminTypeEmployee from "@/app/admin/usuarios/components/AdminTypeEmployee"
import UsuariosCard from "@/app/admin/usuarios/components/UsuarioCard"
import { Usuario, UsuarioApi, UsuarioRole } from "./types/usuario"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "./components/lib/input"

// Corrige nomes que chegaram com encoding latin1 (ex.: "JoÃ£o" -> "João")
const decodeMaybeLatin1 = (value: string) => {
  if (!value) return value
  try {
    const bytes = new Uint8Array([...value].map((c) => c.charCodeAt(0)))
    const decoded = new TextDecoder("utf-8").decode(bytes)
    return decoded
  } catch {
    return value
  }
}

export default function UsuariosPage() {
  const [searchName, setSearchName] = React.useState("")
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([])

  const [funcionarios, setFuncionarios] = React.useState<Usuario[]>([])
  const [loading, setLoading] = React.useState(true)
  const [reload, setReload] = useState(false)

  // ✅ ESTADOS DO DIALOG
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newType, setNewType] = useState<string[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string>("")

  const fetchFuncionarios = () => {
    setLoading(true)

    fetch("/api/usuarios")
      .then(async (res) => {
        if (!res.ok) {
          const error = await res.json().catch(() => ({}))
          throw new Error(error?.error || "Erro ao buscar usuários")
        }

        const data = (await res.json()) as UsuarioApi[]
        console.log("USUARIOS RAW DATA:", data)

        const normalizados: Usuario[] = (Array.isArray(data) ? data : []).map((_u) => {
          const rawName = _u.NOME ?? _u.nome ?? _u.name ?? "Sem nome"
          const name = decodeMaybeLatin1(rawName)

          return {
            id: _u.ID_USUARIO ?? Number(_u.id ?? _u.ID ?? 0),
            name,
            email: _u.EMAIL ?? _u.email ?? "",
            image: _u.FOTO ?? _u.avatar ?? _u.image ?? "",
            type: (Array.isArray(_u.TIPOS)
              ? _u.TIPOS
              : Array.isArray(_u.type)
                ? _u.type
                : _u.TIPOS
                  ? [_u.TIPOS]
                  : _u.type
                    ? Array.isArray(_u.type)
                      ? _u.type
                      : [_u.type]
                    : []) as UsuarioRole[],
            roles: [],
          }
        })

        console.log("USUARIOS NORMALIZADOS:", normalizados)
        setFuncionarios(normalizados)
        setLoading(false)
      })
      .catch((err) => {
        console.error("Erro ao buscar funcionários (front):", err)
        setLoading(false)
      })
  }

  useEffect(() => {
    fetchFuncionarios()
  }, [reload])

  // ✅ HANDLER DE ARQUIVO - converte para base64
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setPhotoPreview(reader.result as string)
        setSelectedFile(file)
      }
      reader.readAsDataURL(file)
    } else {
      setSelectedFile(null)
      setPhotoPreview("")
    }
  }

  // ✅ CRIAR USUÁRIO com foto em base64
  const handleCreateUser = async () => {
    if (!newName.trim() || !newEmail.trim() || newType.length === 0) {
      alert("Nome, email e tipo são obrigatórios!")
      return
    }

    const payload = {
      NOME: newName.trim(),
      EMAIL: newEmail.trim(),
      SENHA: '123456',
      TIPOS: newType,
      TELEFONE: '',
      DESCRICAO: '',
      FOTO: photoPreview, // ✅ base64 da imagem
    }

    console.log('📤 Enviando:', {
      nome: payload.NOME,
      email: payload.EMAIL,
      tipos: payload.TIPOS,
      temFoto: !!payload.FOTO
    })

    try {
      const res = await fetch('/api/usuarios', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        console.log('✅ Usuário criado!')
        setShowNewDialog(false)
        setReload(r => !r)

        // Limpa form
        setNewName("")
        setNewEmail("")
        setNewType([])
        setSelectedFile(null)
        setPhotoPreview("")
      } else {
        const err = await res.json()
        alert(`Erro: ${err.error || 'Falha ao criar'}`)
      }
    } catch (error) {
      console.error('Erro:', error)
      alert('Erro de conexão')
    }
  }

  const numColaboradores = funcionarios.filter((f) =>
    (f.type ?? []).includes("colaborador" as UsuarioRole),
  ).length

  const condutores = funcionarios.filter((f) =>
    (f.type ?? []).includes("condutor" as UsuarioRole),
  ).length

  const administradores = funcionarios.filter((f) =>
    (f.type ?? []).includes("administrador" as UsuarioRole),
  ).length

  const totalFuncionarios = funcionarios.length

  const filteredFuncionarios = funcionarios
    .filter((func) => {
      const nome = (func.name ?? "").toString()
      return nome.toLowerCase().includes(searchName.toLowerCase())
    })
    .filter((func) => {
      if (selectedTypes.length === 0) return true
      const types = func.type ?? []
      return types.some((t: string) => selectedTypes.includes(t))
    })

  if (loading) {
    return <div className="text-center p-10">Carregando...</div>
  }

  return (
    <div className="flex flex-col gap-10">
      <AdminBlock>
        <AdminBlockTitle>Quantidade de Funcionários</AdminBlockTitle>
        <div className="flex justify-center">
          <div className="flex flex-row gap-10">
            <div className="bg-white dark:bg-[#171717] dark:text-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <User width={40} height={40} />
              <h1>Colaboradores</h1>
              <p>{numColaboradores}</p>
            </div>
            <div className="bg-white dark:bg-[#171717] dark:text-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <CarFront width={40} height={40} />
              <h1>Condutores</h1>
              <p>{condutores}</p>
            </div>
            <div className="bg-white dark:bg-[#171717] dark:text-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <ShieldUser width={40} height={40} />
              <h1>Administradores</h1>
              <p>{administradores}</p>
            </div>
          </div>
        </div>
        <hr className="h-1 bg-white mx-auto rounded-full my-6 w-3/4" />
        <h2 className="text-center dark:text-white">Total funcionários: {totalFuncionarios}</h2>
      </AdminBlock>

      <AdminBlock>
        <AdminBlockTitle>Funcionários</AdminBlockTitle>
        <div className="flex flex-row gap-8 flex-wrap items-center justify-center">
          <div>
            <h2 className="dark:text-white">Nome</h2>
            <input
              type="text"
              placeholder="Digite o nome..."
              className="bg-white dark:bg-[#171717] rounded-md p-2 pl-4 text-sm font-bold leading-5 w-80 h-10 dark:text-white hover:text-gray-200/50 hover:text-gray-800 hover:bg-gray-200/50 transition-colors duration-300 focus:outline-2 focus:outline-black leading-5 dark:hover:bg-input/50 focus:outline-transparent"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>
          <div>
            <h2 className="dark:text-white">Tipo de usuário</h2>
            <AdminTypeEmployee value={selectedTypes} onChange={setSelectedTypes} />
          </div>

          {/* Adicionar usuário */}
          <div>
            <button onClick={() => setShowNewDialog(true)} className="flex justify-center items-center">
              <div className="bg-[#171717] flex justify-center items-center p-5 mt-6 rounded-md w-20 h-10 mx-auto cursor-pointer">
                <UserRoundPlus color="white" />
              </div>
            </button>
          </div>
        </div>
        <div>
          <UsuariosCard usuarios={filteredFuncionarios} onUpdated={() => setReload((r) => !r)} />
        </div>
      </AdminBlock>

      {/* ✅ DIALOG COM UPLOAD DE FOTO */}
      <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>Novo usuário</DialogTitle>
            <DialogDescription>Crie um novo usuário abaixo.</DialogDescription>
          </DialogHeader>

          <FieldGroup className="pb-3 space-y-4">
            <Field>
              <FieldLabel htmlFor="newName">Nome *</FieldLabel>
              <Input
                id="newName"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Digite o nome completo"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="newEmail">Email *</FieldLabel>
              <Input
                id="newEmail"
                type="email"
                value={newEmail}
                onChange={(e) => setNewEmail(e.target.value)}
                placeholder="email@exemplo.com"
              />
            </Field>

            <Field>
              <FieldLabel htmlFor="newType">Tipo de usuário *</FieldLabel>
              <AdminTypeEmployee
                value={newType}
                onChange={setNewType}
                className="w-full"
              />
            </Field>

            {/* ✅ CAMPO DE FOTO - FUNCIONANDO! */}
            <Field>
              <FieldLabel htmlFor="newPhoto">Foto (opcional)</FieldLabel>
              <Input
                id="newPhoto"
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="dark:text-black/80"
              />
              {photoPreview && (
                <div className="mt-3 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg border">
                  <p className="text-sm text-green-700 dark:text-green-300 mb-2">✅ Foto selecionada</p>
                  <img
                    src={photoPreview}
                    alt="Preview"
                    className="w-20 h-20 object-cover rounded-md border"
                  />
                </div>
              )}
            </Field>
          </FieldGroup>

          <DialogFooter>
            <DialogClose asChild>
              <Button
                variant="outline"
                onClick={() => {
                  setNewName(""); setNewEmail("");
                  setNewType([]); setSelectedFile(null);
                  setPhotoPreview("");
                }}
              >
                Cancelar
              </Button>
            </DialogClose>
            <Button onClick={handleCreateUser}>Criar usuário</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
