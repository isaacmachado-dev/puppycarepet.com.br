import { Usuario } from "../../cart/types/usuario";

export async function loginUser(data: { email: string; password: string }): Promise<Usuario> {
    const res = await fetch("http://localhost:3000/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    if (!res.ok) {
        throw new Error("Erro ao autenticar usuário");
    }
    return await res.json();
}
export async function getUserProfile(token: string): Promise<Usuario> {
    const res = await fetch("http://localhost:3000/auth/profile", {
        method: "GET",
        headers: { 
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
    });
    if (!res.ok) {
        throw new Error("Erro ao buscar perfil do usuário");
    }
    return await res.json();
}