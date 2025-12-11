import React from "react";

interface LoginButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    label?: string;
}


export default function LoginButton({ label, ...props }: LoginButtonProps) {
  const handleLogin = () => {
    // Lógica de login aqui
    console.log("Botão clicado:", label);
  };

  return (
    <>
      <button
        onClick={handleLogin}
        className="w-full bg-rose-500 hover:bg-rose-600"

        {...props}
      >
        Entrar
      </button>
      <button
        onClick={handleLogin}
        className="w-full bg-rose-500 hover:bg-rose-600"

        {...props}
      >
        Criar nova conta
      </button>
    </>
  );
}
