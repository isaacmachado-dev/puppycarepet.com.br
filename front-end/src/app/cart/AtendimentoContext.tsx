"use client";
import { createContext, useContext, useState, ReactNode } from "react";
import { Atendimento } from "../../types/atendimento";

interface AtendimentoContextProps {
  atendimento: Partial<Atendimento>;
  setAtendimento: (data: Partial<Atendimento>) => void;
  resetAtendimento: () => void;
}

const AtendimentoContext = createContext<AtendimentoContextProps | null>(null);

export function AtendimentoProvider({ children }: { children: ReactNode }) {
  const [atendimento, setAtendimentoState] = useState<Partial<Atendimento>>({});

  const setAtendimento = (data: Partial<Atendimento>) => {
    setAtendimentoState((prev) => ({ ...prev, ...data }));
  };

  const resetAtendimento = () => {
    setAtendimentoState({});
  };

  return (
    <AtendimentoContext.Provider value={{ atendimento, setAtendimento, resetAtendimento }}>
      {children}
    </AtendimentoContext.Provider>
  );
}

export function useAtendimento() {
  const context = useContext(AtendimentoContext);
  if (!context) {
    throw new Error("useAtendimento must be used within AtendimentoProvider");
  }
  return context;
}
