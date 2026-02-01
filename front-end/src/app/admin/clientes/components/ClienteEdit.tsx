import React, { useEffect, useState, ChangeEvent } from "react";
import { Field, FieldGroup, FieldLabel } from "@/components/ui/field";
import { Input } from "@/app/admin/clientes/components/lib/input";
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
} from "@/app/admin/clientes/components/lib/dropdown-menu";
import { EllipsisVertical } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { Cliente } from "../types/cliente";

interface DropdownMenuDialogProps {
    cliente: Cliente;
    onUpdated?: () => void;
}

export default function DropdownMenuDialog({
    cliente,
    onUpdated,
}: DropdownMenuDialogProps) {
    const [showNewDialog, setShowNewDialog] = useState(false);
    const [name, setName] = useState("");
    const [endereco, setEndereco] = useState("");

    useEffect(() => {
        if (showNewDialog) {
            setName(cliente.name);
            setEndereco(cliente.endereco ?? "");
        }
    }, [showNewDialog, cliente.name, cliente.endereco]);

    const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    };

    const handleEnderecoChange = (e: ChangeEvent<HTMLInputElement>) => {
        setEndereco(e.target.value);
    };

    const handleSave = async () => {
        if (!name.trim()) {
            alert("Nome é obrigatório");
            return;
        }

        try {
            const formData = new FormData();
            formData.append("NOME", name);
            formData.append("ENDERECO", endereco);

            const res = await fetch(`/api/clientes/${cliente.id}`, {
                method: "PATCH",
                body: formData,
            });

            if (!res.ok) {
                const err = await res.json().catch(() => ({}));
                console.error("Erro:", res.status, err);
                alert(`Erro: ${err.message || "Falha ao salvar"}`);
                return;
            }

            setShowNewDialog(false);
            onUpdated?.();
        } catch (error) {
            console.error("Erro de rede:", error);
            alert("Erro de conexão");
        }
    };

    // ✅ CORREÇÃO: onSelect recebe Event, não MouseEvent
    const handleEditSelect = (event: Event) => {
        event.preventDefault();
        setShowNewDialog(true);
    };

    const handleDeleteSelect = async (event: Event) => {
        event.preventDefault();
        if (!confirm(`Excluir ${cliente.name}?`)) return;

        try {
            const res = await fetch(`/api/clientes/${cliente.id}`, {
                method: "DELETE",
            });

            if (res.ok && onUpdated) {
                onUpdated();
            }
        } catch (error) {
            console.error("Erro ao excluir:", error);
        }
    };

    return (
        <>
            <DropdownMenu modal={false}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        aria-label="Open menu"
                        size="icon-sm"
                        className="group border-0 cursor-pointer bg-[#FFFFFF] hover:ring-2 ring-[#9A9A9A] dark:bg-[#171717] dark:hover:bg-[#171717] focus:outline-2 data-[state=open]:ring-2"
                    >
                        <div className="text-[#242424] dark:text-[#E3E3E3] dark:group-hover:text-[#FFFFFF]">
                            <EllipsisVertical />
                        </div>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-40">
                    <DropdownMenuLabel>Ações</DropdownMenuLabel>
                    <DropdownMenuGroup>
                        <DropdownMenuItem
                            onSelect={handleEditSelect}
                            className="cursor-pointer"
                        >
                            Editar
                        </DropdownMenuItem>
                        <DropdownMenuItem
                            onSelect={handleDeleteSelect}
                            className="text-red-600 cursor-pointer data-[state=highlighted]:bg-red-100 data-[state=highlighted]:text-red-800 focus:bg-red-100 focus:text-red-800"
                        >
                            Excluir
                        </DropdownMenuItem>
                    </DropdownMenuGroup>
                </DropdownMenuContent>
            </DropdownMenu>

            <Dialog open={showNewDialog} onOpenChange={setShowNewDialog}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Editar Cliente</DialogTitle>
                        <DialogDescription>
                            Edite as informações do cliente abaixo.
                        </DialogDescription>
                    </DialogHeader>

                    <div className="space-y-4 pb-3">
                        <div>
                            <FieldLabel htmlFor="name">Nome</FieldLabel>
                            <Input
                                id="name"
                                name="name"
                                value={name}
                                onChange={handleNameChange}
                                placeholder="Nome do cliente"
                            />
                        </div>

                        <div>
                            <FieldLabel htmlFor="endereco">Endereço</FieldLabel>
                            <Input
                                id="endereco"
                                name="endereco"
                                value={endereco}
                                onChange={handleEnderecoChange}
                                placeholder="Endereço completo"
                            />
                        </div>

                        {/* <div>
                            <FieldLabel>Tipo de usuário</FieldLabel>
                            <div className="text-sm text-muted-foreground">
                                Será q preciso?
                            </div>
                        </div> */}
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button variant="outline" type="button">
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="button" onClick={handleSave}>
                            Salvar alterações
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
}
