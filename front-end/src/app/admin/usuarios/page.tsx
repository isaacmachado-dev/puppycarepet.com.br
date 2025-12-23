"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { User, CarFront, ShieldUser } from "lucide-react"

import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings"
import AdminTypeEmployee from "@/app/admin/usuarios/components/AdminTypeEmployee"
import UsuariosCard from "@/app/admin/usuarios/components/UsuarioCard"
import { Usuario, UsuarioApi, UsuarioRole } from "./types/usuario"

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
            id:
              _u.ID_USUARIO ??
              Number(_u.id ?? _u.ID ?? 0), // fallback se usar os outros campos
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
              <User className="flex" width="40px" height="40px" />
              <h1>Colaboradores</h1>
              <p>{numColaboradores}</p>
            </div>

            <div className="bg-white dark:bg-[#171717] dark:text-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <CarFront className="flex" width="40px" height="40px" />
              <h1>Condutores</h1>
              <p>{condutores}</p>
            </div>

            <div className="bg-white dark:bg-[#171717] dark:text-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <ShieldUser className="flex" width="40px" height="40px" />
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

        <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
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
        </div>

        <div>
          <UsuariosCard usuarios={filteredFuncionarios} onUpdated={() => setReload((r) => !r)} />
        </div>
      </AdminBlock>
    </div >
  )
}
