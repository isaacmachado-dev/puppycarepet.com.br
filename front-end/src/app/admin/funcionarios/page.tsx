"use client"

import * as React from "react"
import { useState } from "react";
import Image from "next/image";
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { User, CarFront, ShieldUser, EllipsisVertical, MoreHorizontalIcon } from "lucide-react"
import { Button } from "@/components/ui/button"

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
} from "@/components/ui/dropdown-menu"
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings"



type Checked = DropdownMenuCheckboxItemProps["checked"]

export function DropdownMenuDialog() {
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button variant="outline" aria-label="Open menu" size="icon-sm">
                        <EllipsisVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)}>
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem disabled>Excluir</DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>
            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar o funcionário</DialogTitle>
                        <DialogDescription>
                            Edite as informações do funcionário abaixo.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="pb-3">
                        <Field>
                            <FieldLabel htmlFor="filename">Nome</FieldLabel>
                            <Input id="filename" name="filename" placeholder="{Nome atual}" />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input id="email" name="email" placeholder="emailAtual@exemplo.com.br" />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
            <Dialog open={showShareDialog} onOpenChange={setShowShareDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Share File</DialogTitle>
                        <DialogDescription>
                            Anyone with the link will be able to view this file.
                        </DialogDescription>
                    </DialogHeader>
                    <FieldGroup className="py-3">
                        <Field>
                            <Label htmlFor="email">Email Address</Label>
                            <Input
                                id="email"
                                name="email"
                                type="email"
                                placeholder="shadcn@vercel.com"
                                autoComplete="off"
                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="message">Message (Optional)</FieldLabel>
                            <Textarea
                                id="message"
                                name="message"
                                placeholder="Check out this file"
                            />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline">Cancel</Button>
                        </DialogClose>
                        <Button type="submit">Send Invite</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}


export function FuncionariosPage() {

    const [showStatusBar, setShowStatusBar] = React.useState<Checked>(true)
    const [showActivityBar, setShowActivityBar] = React.useState<Checked>(false)
    const [showPanel, setShowPanel] = React.useState<Checked>(false)
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])
    const [dropdownActive, setDropdownActive] = useState(false);

    const funcionarios = 3
    const condutores = 2
    const administradores = 1

    const totalFuncionarios = funcionarios + condutores + administradores

    const toggleType = (type: string, checked: boolean) => {
        if (checked) {
            setSelectedTypes([...selectedTypes, type])
        } else {
            setSelectedTypes(selectedTypes.filter(t => t !== type))
        }
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
                            <p>{funcionarios}</p>
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
                <AdminBlockTitle>Funcionários </AdminBlockTitle>

                <div className="flex flex-row gap-2 flex-wrap items-center justify-center">
                    <div>
                        <h2>Nome</h2>
                        <input
                            type="text"
                            placeholder="Digite o nome..."
                            className="bg-[#D9D9D9] p-2 rounded-sm outline-none focus:ring-2 focus:ring-[#2A2D34] hover:bg-white text-sm font-bold leading-5 w-90 h-10"
                        />
                    </div>

                    <div>
                        <h2>Tipo de usuário</h2>
                        <DropdownMenu open={dropdownActive} onOpenChange={setDropdownActive}>
                            <DropdownMenuTrigger asChild>
                                <Button
                                    variant="outline"
                                    className={`bg-[#D9D9D9] rounded-sm p-2 w-60 h-10 justify-start !text-left cursor-pointer ${dropdownActive ? "ring-2 ring-black ring-offset-2" : ""
                                        }`}
                                >
                                    {selectedTypes.length > 0 ? (
                                        <div className="flex flex-wrap gap-1 rounded-sm h-[30px] ">
                                            {selectedTypes.slice(0, 2).map((type) => (
                                                <span
                                                    key={type}
                                                    className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center"
                                                >
                                                    {type}
                                                </span>
                                            ))}
                                            {selectedTypes.length > 2 && (
                                                <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                                                    +{selectedTypes.length - 2}
                                                </span>
                                            )}
                                        </div>
                                    ) : (
                                        <span className="rounded-sm text-[#6c6c6c] text-sm font-bold leading-5">
                                            Escolha
                                        </span>
                                    )}
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent className="w-56">
                                <DropdownMenuSeparator />
                                <DropdownMenuCheckboxItem
                                    checked={selectedTypes.includes("Funcionário")}
                                    onCheckedChange={(checked) => toggleType("Funcionário", !!checked)}
                                    className="cursor-pointer"
                                >
                                    Funcionário
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={selectedTypes.includes("Condutor")}
                                    onCheckedChange={(checked) => toggleType("Condutor", !!checked)}
                                    className="cursor-pointer"
                                >
                                    Condutor
                                </DropdownMenuCheckboxItem>
                                <DropdownMenuCheckboxItem
                                    checked={selectedTypes.includes("Administradores")}
                                    onCheckedChange={(checked) => toggleType("Administradores", !!checked)}
                                    className="cursor-pointer"
                                >
                                    Administradores
                                </DropdownMenuCheckboxItem>
                            </DropdownMenuContent>
                        </DropdownMenu>
                    </div>
                </div>

                <div className="flex flex-row gap-4 grid grid-cols-4 mt-10">

                    <div className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center relative ">

                        <div className="flex justify-end p-1 absolute top-0 right-0">
                            <DropdownMenuDialog />
                        </div>

                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">

                            <Image
                                src="/admin/funcionarios/Joel-MIller.webp"
                                width={200}
                                height={200}
                                alt="Joel Miller"
                                className="w-full h-full object-cover"
                            />

                        </div>
                        <div className="flex flex-row">


                            <h3 className="mx-auto">Joel Miller</h3>

                        </div>
                    </div>

                    <div className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center ">

                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
                            <Image
                                src="/admin/funcionarios/ellie.jpg"
                                width={200}
                                height={200}
                                alt="Ellie Williams"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-center">Ellie</h3>
                    </div>

                    <div className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center ">

                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
                            <Image
                                src="/admin/funcionarios/rick.webp"
                                width={200}
                                height={200}
                                alt="Rick Grimes"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-center">Rick Grimes</h3>
                    </div>

                    <div className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center ">

                        <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
                            <Image
                                src="/admin/funcionarios/morty.webp"
                                width={200}
                                height={200}
                                alt="Morty"
                                className="w-full h-full object-cover"
                            />
                        </div>

                        <h3 className="text-center">Morty</h3>
                    </div>

                </div>

            </AdminBlock >
        </div >
    )
}
