import Image from "next/image";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useState } from "react"

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
} from "@/components/ui/dropdown-menu"
import { EllipsisVertical } from "lucide-react";
import { Button } from "../button";

interface Funcionario {
    id: number;
    name: string;
    image: string;
}

interface DropdownMenuDialogProps {
    funcionario: Funcionario;
}

export default function DropdownMenuDialog({ funcionario }: DropdownMenuDialogProps) {
    const [showNewDialog, setShowNewDialog] = useState(false)

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
                            <Input
                                id="filename"
                                name="filename"
                                defaultValue={funcionario.name}

                            />
                        </Field>
                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                defaultValue="{emailAtual@exemplo.com.br}"
                            />
                        </Field>
                    </FieldGroup>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">Cancelar</Button>
                        </DialogClose>
                        <Button type="submit" className="cursor-pointer">Salvar</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    )
}
