"use client";

import { useState } from "react";
import { Dog } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export function Atendendo() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selected = event.target.files?.[0];
        if (!selected) return;

        const url = URL.createObjectURL(selected);
        setPreviewUrl(url);
        setFile(selected);
        setShowConfirm(true); // abre o modal
    }

    async function handleConfirm() {
        if (!file) return;
        // TODO: enviar pro backend aqui (FormData + fetch)
        setShowConfirm(false);
    }

    function handleCancel() {
        setPreviewUrl(null);
        setFile(null);
        setShowConfirm(false);
    }


    return (
        <div className="space-y-4">
            <div className="p-2 border-2 border-black dark:border-white rounded-md w-max mx-auto">
                <div className="flex flex-col items-center justify-center gap-2">
                    <input
                        id="pet-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <label htmlFor="pet-photo" className="cursor-pointer">
                        <div className="w-[300px] h-[300px] relative">
                            <Image
                                src={
                                    previewUrl ||
                                    "https://placehold.co/300x300.png?text=Imagem"
                                }
                                alt="Dog"
                                className="object-cover rounded-md border"
                                fill
                            />
                        </div>
                    </label>

                    <div className="flex flex-row gap-2 items-center dark:text-white">

                        <Dog className="w-8 h-8" />
                        <span className="font-bold text-lg ">Malu</span>
                    </div>
                </div>
            </div>

            {showConfirm && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                    <div className="w-full max-w-sm rounded-lg p-4 shadow-lg">
                        <h2 className="mb-2 text-base font-semibold">
                            Enviar foto do pet?
                        </h2>
                        <p className="mb-4 text-sm text-gray-600">
                            Deseja mesmo enviar esta imagem para o servidor?
                        </p>

                        <div className="flex justify-end gap-2 text-sm">
                            <button
                                onClick={handleCancel}
                                className="rounded-md bg-gray-200 px-3 py-1 hover:bg-gray-300 cursor-pointer"
                            >
                                Cancelar
                            </button>
                            <Button
                                type="button"
                                onClick={handleConfirm}
                                className="cursor-pointer"
                            >
                                Sim, enviar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );



}

