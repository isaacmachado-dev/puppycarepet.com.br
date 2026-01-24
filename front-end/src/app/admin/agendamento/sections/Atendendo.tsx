"use client";

import { useState } from "react";
import { Dog } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ConfirmModal } from "./components/ConfirmModal";

export function Atendendo() {
    const [previewUrl, setPreviewUrl] = useState<string | null>(null);
    const [file, setFile] = useState<File | null>(null);
    const [showConfirm, setShowConfirm] = useState(false);

    function handleFileChange(event: React.ChangeEvent<HTMLInputElement>) {
        const selected = event.target.files?.[0];
        if (!selected) return;
        if (previewUrl) URL.revokeObjectURL(previewUrl);

        const url = URL.createObjectURL(selected);
        setPreviewUrl(url);
        setFile(selected);
        setShowConfirm(true);
    }

    async function handleConfirm() {
        if (!file) return;
        const formData = new FormData();
        formData.append("petPhoto", file);
        // await fetch("/api/atendendo/photo", { method: "POST", body: formData });
        handleCancel();
    }

    function handleCancel() {
        if (previewUrl) URL.revokeObjectURL(previewUrl);
        setPreviewUrl(null);
        setFile(null);
        setShowConfirm(false);
    }

    return (
        <div className="space-y-6 p-6 max-w-md mx-auto">
            

            <div className="border-2 border-black dark:border-white rounded-xl p-2 bg-gradient-to-br from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 shadow-xl">
                <div className="flex flex-col items-center gap-4 text-center">
                    <input
                        id="pet-photo"
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="hidden"
                    />

                    <label htmlFor="pet-photo" className="cursor-pointer w-full">
                        <div className="w-[100%] h-[100%] rounded-2xl border-4 border-dashed border-gray-300 dark:border-gray-600 hover:border-[#E72989] dark:hover:border-pink-400 transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-[1.02] mx-auto">
                            {previewUrl ? (
                                <img
                                    src={previewUrl}
                                    alt="Preview da Malu"
                                    className="w-full h-full object-cover rounded-xl shadow-2xl"
                                />
                            ) : (
                                <div className="w-full h-full flex flex-col items-center justify-center gap-3 p-6 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-slate-800 dark:to-slate-700 rounded-xl group">
                                    <Dog className="w-20 h-10 md:h-20 text-pink-400 group-hover:text-pink-500" />
                                    <div className="text-base font-bold text-pink-400 group-hover:text-pink-500">
                                        Adicionar foto
                                    </div>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 px-4">
                                        Clique para escolher a foto da Malu
                                    </p>
                                </div>
                            )}
                        </div>
                    </label>

                    <div className="flex items-center gap-3 pt-2">
                        <div className="w-12 h-12 bg-pink-400 rounded-2xl flex items-center justify-center shadow-lg">
                            <Dog className="w-7 h-7 text-white" />
                        </div>
                        <span className="text-2xl font-black text-pink-400">
                            Malu
                        </span>
                    </div>

                </div>
            </div>

            <ConfirmModal open={showConfirm} onClose={handleCancel}>

                <div className="flex gap-6 pt-6">
                    <button onClick={handleCancel} className="flex-1 px-8 py-4 rounded-2xl bg-gray-600/50 hover:bg-gray-500/50 backdrop-blur-sm border border-gray-400/30 text-lg font-semibold text-white transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer">Cancelar</button>
                    <button onClick={handleConfirm} className="flex-1 px-8 py-4 rounded-2xl bg-gradient-to-r from-emerald-400 to-emerald-500 hover:from-emerald-500 hover:to-emerald-600 backdrop-blur-sm border border-gray-400/30 text-lg font-semibold text-black transition-all shadow-xl hover:shadow-2xl hover:scale-[1.02] cursor-pointer">Sim</button>
                </div>
            </ConfirmModal>
        </div>
    );
}
