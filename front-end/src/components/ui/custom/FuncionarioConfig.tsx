import Image from "next/image";

import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { useEffect, useState } from "react"

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
import { EllipsisVertical } from "lucide-react";
import { Button } from "../button";


type Checked = DropdownMenuCheckboxItemProps["checked"]
interface Funcionario {
    id: number;
    name: string;
    image: string;
}

export default function DropdownMenuDialog() {
    const [showNewDialog, setShowNewDialog] = useState(false)
    const [showShareDialog, setShowShareDialog] = useState(false)
    const [funcionarioNome, setFuncionarioNome] = useState<Funcionario[]>([]);

    useEffect(() => {
        fetch('/api/funcionarios') // rota que você criou
            .then(res => res.json())
            .then(data => setFuncionarioNome(data))
            .catch(err => console.error('Erro ao buscar funcionários:', err));
    }, []);

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="cursor-pointer">
                    <Button variant="outline" aria-label="Open menu" size="icon-sm">
                        <EllipsisVertical />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem onSelect={() => setShowNewDialog(true)} className="cursor-pointer">
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
                            <Input id="filename" name="filename" placeholder={funcionarioNome[0]?.name} />
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
