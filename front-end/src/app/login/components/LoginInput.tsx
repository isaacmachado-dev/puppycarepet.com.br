import React from "react";

export default function LoginInput() {
  return (
    <>
      <input
        type="text"
        placeholder="Digite seu usuário"
        value=""
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
      />
    <input
        type="password"
        placeholder="Digite sua senha"
        value="Senha"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 mt-4"
      />
      <input 
        type="email"
        placeholder="Digite seu email"
        value="Seu e-mail"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 mt-4"
      />
      <input
        type="tel"
        placeholder="Digite seu telefone"
        value="Seu telefone"
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500 mt-4"
      />
    </>
  );
}