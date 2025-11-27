"use client"

import * as React from "react"
import { useEffect, useState } from "react"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { User, CarFront, ShieldUser } from "lucide-react"

import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings"
import AdminTypeEmployee from "@/components/ui/custom/AdminTypeEmployee"
import UsuariosCard from "@/app/admin/usuarios/UsuarioCard"
import { Usuario, UsuarioRole } from "./types/usuario"

type Checked = DropdownMenuCheckboxItemProps["checked"]

export function UsuariosPage() {
  const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
  const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
  const [showPanel, setShowPanel] = React.useState<Checked>(false)

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

        const data = await res.json()
        console.log("USUARIOS RAW DATA:", data)

        const normalizados: Usuario[] = (Array.isArray(data) ? data : []).map((u: any) => ({
          id: u.ID_USUARIO ?? u.id ?? u.ID ?? "",
          name: u.NOME ?? u.nome ?? u.name ?? "Sem nome",
          email: u.EMAIL ?? u.email ?? "",
          image: u.FOTO_USUARIO ?? u.avatar ?? u.image ?? "",
          type: Array.isArray(u.TIPO_USUARIO)
            ? u.TIPO_USUARIO
            : Array.isArray(u.type)
              ? u.type
              : u.TIPO_USUARIO
                ? [u.TIPO_USUARIO]
                : u.type
                  ? Array.isArray(u.type)
                    ? u.type
                    : [u.type]
                  : [],
          roles: Array.isArray(u.ROLES_USUARIO)
            ? u.ROLES_USUARIO
            : Array.isArray(u.roles)
              ? u.roles
              : u.ROLES_USUARIO
                ? [u.ROLES_USUARIO]
                : u.roles
                  ? Array.isArray(u.roles)
                    ? u.roles
                    : [u.roles]
                  : [],
        }))

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

  const numFuncionarios = funcionarios.filter((f) =>
    (f.type ?? []).includes("funcionario" as UsuarioRole),
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
        <AdminBlockTitle>Gerenciamento de Funcionários</AdminBlockTitle>

        <div className="flex justify-center">
          <div className="flex flex-row gap-10">
            <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <User className="flex" width="40px" height="40px" />
              <h1>Funcionários</h1>
              <p>{numFuncionarios}</p>
            </div>

            <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <CarFront className="flex" width="40px" height="40px" />
              <h1>Condutores</h1>
              <p>{condutores}</p>
            </div>

            <div className="bg-white p-10 rounded-md flex flex-col items-center text-center w-40">
              <ShieldUser className="flex" width="40px" height="40px" />
              <h1>Administradores</h1>
              <p>{administradores}</p>
            </div>
          </div>
        </div>

        <hr className="h-1 bg-white mx-auto rounded-full my-6 w-3/4" />

        <h2 className="text-center">Total funcionários: {totalFuncionarios}</h2>
      </AdminBlock>

      <AdminBlock>
        <AdminBlockTitle>Funcionários</AdminBlockTitle>

        <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
          <div>
            <h2>Nome</h2>
            <input
              type="text"
              placeholder="Digite o nome..."
              className="bg-[#D9D9D9] p-2 rounded-sm outline-none focus:ring-2 focus:ring-[#2A2D34] hover:bg-white text-sm font-bold leading-5 w-80 h-10"
              value={searchName}
              onChange={(e) => setSearchName(e.target.value)}
            />
          </div>

          <div>
            <h2>Tipo de usuário</h2>
            <AdminTypeEmployee value={selectedTypes} onChange={setSelectedTypes} />
          </div>
        </div>

        <div>
          <UsuariosCard usuarios={filteredFuncionarios} onUpdated={() => setReload((r) => !r)} />
        </div>
      </AdminBlock>
    </div>
  )
}
