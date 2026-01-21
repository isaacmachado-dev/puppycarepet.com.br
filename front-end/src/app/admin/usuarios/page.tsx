"use client"

import * as React from "react"
import { useEffect, useState, useRef } from "react"
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

// ✅ SÓ corrige SE tiver mojibake (�) - NÃO quebra nomes corretos!
const fixNameOnlyIfBroken = (value: string): string => {
  if (!value || !value.includes('�')) return value;  // ← CRUCIAL: não mexe no correto!

  try {
    const bytes = new Uint8Array([...value].map(c => c.charCodeAt(0)));
    return new TextDecoder('utf-8').decode(bytes);
  } catch {
    return value;
  }
}

export default function UsuariosPage() {
  const [searchName, setSearchName] = React.useState("")
  const [selectedTypes, setSelectedTypes] = React.useState<string[]>([])

  const [funcionarios, setFuncionarios] = React.useState<Usuario[]>([])
  const [loading, setLoading] = React.useState(true)
  const [reload, setReload] = useState(false)

  // ✅ Salva posição do scroll
  const scrollPositionRef = useRef(0)

  // ✅ ESTADOS DO DIALOG
  const [showNewDialog, setShowNewDialog] = useState(false)
  const [newName, setNewName] = useState("")
  const [newEmail, setNewEmail] = useState("")
  const [newType, setNewType] = useState<string[]>([])
  const [selectedFile, setSelectedFile] = useState<File | null>(null)
  const [photoPreview, setPhotoPreview] = useState<string>("")

  const [editedId, setEditedId] = useState<number | null>(null);

  const fetchFuncionarios = () => {
    // ✅ SALVA SCROLL ANTES do reload
    scrollPositionRef.current = window.scrollY || document.documentElement.scrollTop || 0

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
          const name = fixNameOnlyIfBroken(rawName)  // ✅ USA A NOVA FUNÇÃO!

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

    // ✅ Scroll para usuário editado
    if (editedId) {
      setTimeout(() => {
        const el = document.querySelector(`[data-user-id="${editedId}"]`);
        el?.scrollIntoView({ behavior: 'smooth', block: 'center' });
        setEditedId(null);
      }, 500);
    }
  }

  // ✅ RESTAURA SCROLL após dados carregarem
  useEffect(() => {
    if (!loading && scrollPositionRef.current > 0) {
      requestAnimationFrame(() => {
        window.scrollTo({ top: scrollPositionRef.current, behavior: 'auto' })
      })
    }
  }, [funcionarios, loading])

  useEffect(() => {
    fetchFuncionarios()
  }, [reload])

  const compressImage = (file: File, maxWidth: number = 400, maxHeight: number = 400, quality: number = 0.8): Promise<string> => {
    return new Promise((resolve) => {
      const canvas = document.createElement('canvas')
      const ctx = canvas.getContext('2d')!
      const img = new Image()

      img.onload = () => {
        const ratio = Math.min(maxWidth / img.width, maxHeight / img.height)
        canvas.width = img.width * ratio
        canvas.height = img.height * ratio

        ctx.drawImage(img, 0, 0, canvas.width, canvas.height)
        const compressed = canvas.toDataURL('image/jpeg', quality)
        resolve(compressed)
      }

      img.src = URL.createObjectURL(file)
    })
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file && file.type.startsWith('image/')) {
      try {
        const compressedBase64 = await compressImage(file, 300, 300, 0.7)
        console.log('📸 Imagem comprimida:', compressedBase64.length / 1024, 'KB')

        setPhotoPreview(compressedBase64)
        setSelectedFile(file)
      } catch (error) {
        console.error('Erro ao comprimir imagem:', error)
      }
    } else {
      setSelectedFile(null)
      setPhotoPreview("")
    }
  }

  const handleCreateUser = async () => {
    if (!newName.trim() || !newEmail.trim() || newType.length === 0) {
      alert("Nome, email e tipo são obrigatórios!")
      return
    }

    const formData = new FormData();
    formData.append('NOME', newName.trim());
    formData.append('EMAIL', newEmail.trim());
    formData.append('SENHA', '123456');
    formData.append('TIPOS', JSON.stringify(newType));

    if (selectedFile) {
      formData.append('FOTO', selectedFile);
      console.log('📤 Enviando foto:', selectedFile.name, selectedFile.size);
    }

    try {
      const res = await fetch('http://localhost:4000/usuarios', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        console.log('✅ Criado com foto:', data);
        setShowNewDialog(false);
        setReload(r => !r);

        // Limpa form
        setNewName("");
        setNewEmail("");
        setNewType([]);
        setSelectedFile(null);
        setPhotoPreview("");
      } else {
        alert(data.message || data.error || 'Erro ao criar');
      }
    } catch (error) {
      console.error('Erro:', error);
      alert('Erro de conexão');
    }
  };

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

            {/* ✅ CAMPO DE FOTO */}
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
                  setNewName("");
                  setNewEmail("");
                  setNewType([]);
                  setSelectedFile(null);
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
