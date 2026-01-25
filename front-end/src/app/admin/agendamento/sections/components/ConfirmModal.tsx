"use client";
import { createPortal } from "react-dom";
import { Dispatch, ReactNode, SetStateAction, useState } from "react";
import { Dog } from "lucide-react";
import { useLockScroll } from "@/hooks/useLockScroll";

interface Props {
    open: boolean;
    onClose: () => void;
    children: ReactNode;
}

export function ConfirmModal({ open, onClose, children }: Props) {
    useLockScroll(open); // ✅ Hook cuida de tudo

    if (!open) return null;

    const handleBackdropClick = () => onClose();

    return createPortal(
        <>
            <div className="fixed inset-0 z-[99999] bg-black/90 backdrop-blur-2xl" onClick={handleBackdropClick} />
            <div className="fixed inset-0 z-[100000] flex items-center justify-center p-6">
                <div className="bg-pink-400 backdrop-blur-3xl rounded-3xl p-10 shadow-2xl border-4 border-pink-400/50 w-full max-w-lg max-h-[90vh] overflow-auto" onClick={e => e.stopPropagation()}>
                    <Dog className="w-24 h-24 mx-auto mb-6 text-white" />
                    <div className="text-center mb-8">
                        <h2 className="text-4xl font-black text-slate-900 mb-6">Enviar a foto da {"{Malu}"}?</h2>
                        <p className="text-2xl text-white leading-relaxed">Confirme para salvar no sistema de atendimento.</p>
                    </div>
                    {children}
                </div>
            </div>
        </>,
        document.body
    );
}
