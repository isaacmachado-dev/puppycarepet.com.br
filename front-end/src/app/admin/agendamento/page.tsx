"use client";

import { useState } from "react";

export default function AgendamentoPage() {
    const [texto, setTexto] = useState(false);

    return (
        texto ? <div>
            <h1>Agendamentos</h1>
            <button onClick={() => setTexto(!texto)} className="p-2 bg-[yellow]">Voltar</button>
        </div> :
        
            <div>
                <h1>Página administrativa em desenvolvimento.</h1>

                <button onClick={
                    () => setTexto(!texto)} >
                    <div>
                        <h1>...</h1>
                    </div>
                </button>

            </div>

    )

}