
"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
    const [usuario, setUsuario] = useState("");
    const [senha, setSenha] = useState("");
    const [error, setError] = useState("");
    const router = useRouter();

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError("");
        try {
            const res = await fetch("http://localhost:4000/usuarios/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ id: Number(usuario), senha }),
            });
            const data = await res.json();
            if (res.ok && data.token) {
                localStorage.setItem("admin_token", data.token);
                router.replace("/admin");
            } else {
                // Exibe mensagem detalhada do backend
                setError(data.message || data.error || "Usuário ou senha inválidos");
            }
        } catch (err) {
            console.error(err);
            setError("Erro ao autenticar. Tente novamente.");
        }
    }

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <form className="bg-white p-8 rounded shadow-md w-full max-w-sm" onSubmit={handleSubmit}>
                <h2 className="text-2xl font-bold mb-6 text-center">Login Admin - Puppy Care</h2>
                <input
                    type="text"
                    placeholder="ID do Usuário"
                    className="w-full p-2 mb-4 border rounded"
                    value={usuario}
                    onChange={e => setUsuario(e.target.value)}
                    required
                />
                <input
                    type="password"
                    placeholder="Senha"
                    className="w-full p-2 mb-4 border rounded"
                    value={senha}
                    onChange={e => setSenha(e.target.value)}
                    required
                />
                {error && <div className="text-red-600 mb-4 text-center">{error}</div>}
                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white py-2 rounded font-bold hover:bg-blue-700 transition"
                >
                    Entrar
                </button>
            </form>
        </div>
    );
}
