import React from "react";

interface LoginLinksProps {
    onForgotPassword: () => void;
    onSignUp: () => void;
    onCreateNewAccount: () => void;
    onResendVerification: () => void;
}

export default function LoginLinks({
    onForgotPassword,
    onSignUp,
    onCreateNewAccount,
    onResendVerification,
}: LoginLinksProps) {
    return (
        <div className="flex flex-col items-center mt-4 space-y-2">
            <button
                onClick={onForgotPassword}
                className="text-sm text-rose-500 hover:underline"
            >
                Esqueci a senha?
            </button>
            <button
                onClick={onSignUp}
                className="text-sm text-rose-500 hover:underline"
            >
                Acessar conta
            </button>
            <button
                onClick={onCreateNewAccount}
                className="text-sm text-rose-500 hover:underline"
            >
                Criar uma nova conta?
            </button>
            <button
                onClick={onResendVerification}
                className="text-sm text-rose-500 hover:underline"
            >
                Reenviar email de verificação
            </button>
        </div>
    );
}   