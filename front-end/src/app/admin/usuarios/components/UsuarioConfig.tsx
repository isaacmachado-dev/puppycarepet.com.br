import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/app/admin/usuarios/components/lib/input";

import { useEffect, useState } from "react";
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
} from "@/app/admin/usuarios/components/lib/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import AdminTypeEmployee from "./AdminTypeEmployee";
import { Usuario } from "../types/usuario";

interface DropdownMenuDialogProps {
    usuario: Usuario;
    onUpdated?: () => void;
}

export default function DropdownMenuDialog({
    usuario,
    onUpdated,
}: DropdownMenuDialogProps) {
    const [showNewDialog, setShowNewDialog] = useState(false);
    const [name, setName] = useState(usuario.name);
    const [email, setEmail] = useState(usuario.email);
    const [type, setType] = useState<string[]>(usuario.type ?? []);

    // Reseta estado quando abrir o diálogo ou o usuário mudar
    useEffect(() => {
        if (showNewDialog) {
            setName(usuario.name);
            setEmail(usuario.email);
            setType(usuario.type ?? []);
        }
    }, [showNewDialog, usuario]);

    const handleSave = async () => {
        try {
            const res = await fetch(`/api/usuarios/${usuario.id}`, {
                method: "PATCH",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name,
                    email,
                    type,
                }),
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                console.error("Erro ao atualizar usuário:", res.status, err);
                return;
            }

            setShowNewDialog(false);
            if (onUpdated) onUpdated();
        } catch (error) {
            console.error("Erro de rede ao atualizar usuário:", error);
        }
    };

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild className="group border-0 cursor-pointer bg-[#FFFFFF] hover:ring-2 ring-[#9A9A9A]  dark:bg-[#171717] dark:hover:bg-[#171717] focus:outline-2 data-[state=open]:ring-2" >
                    <Button
                        variant="outline"
                        aria-label="Open menu"
                        size="icon-sm"
                    >
                        <div className="text-[#242424]  dark:text-[#E3E3E3] dark:group-hover:text-[#FFFFFF]">
                            <EllipsisVertical
                            />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40" align="end">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onSelect={() => setShowNewDialog(true)}
                            className="cursor-pointer"
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={() => {
                                if (confirm(`Excluir ${usuario.name}?`)) {
                                    fetch(`/api/usuarios/${usuario.id}`, {
                                        method: "DELETE",
                                    })
                                        .then(res => {
                                            if (res.ok && onUpdated) onUpdated();  // recarrega lista
                                        })
                                        .catch(console.error);
                                }
                            }}
                            className="text-red-600 cursor-pointer  
                                data-[state=highlighted]:bg-red-100 
                                data-[state=highlighted]:text-red-800 
                                focus:bg-red-100 
                                focus:text-red-800 cursor-pointer
                            "
                        >
                            Excluir
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar o usuário</DialogTitle>
                        <DialogDescription>
                            Edite as informações do usuário abaixo.
                        </DialogDescription>
                    </DialogHeader>

                    <FieldGroup className="pb-3">
                        <Field>
                            <FieldLabel htmlFor="filename">Nome</FieldLabel>
                            <Input
                                id="filename"
                                name="filename"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="dark:text-black/80 dark:hover:bg-input/50 dark:hover:text-white"

                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="email">Email</FieldLabel>
                            <Input
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="dark:text-black/80 dark:hover:bg-input/50 outline-0 border-0 m-0 ring-0 dark:hover:text-white"
                            />
                        </Field>

                        <Field>
                            <FieldLabel htmlFor="type">Tipo de usuário</FieldLabel>
                            <AdminTypeEmployee
                                value={type}
                                onChange={setType}
                                className="w-full border-2 border-gray-200"

                            />
                        </Field>
                    </FieldGroup>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" className="cursor-pointer">
                                Cancelar
                            </Button>
                        </DialogClose>

                        <Button
                            type="button"
                            className="cursor-pointer"
                            onClick={handleSave}
                        >
                            Salvar
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
