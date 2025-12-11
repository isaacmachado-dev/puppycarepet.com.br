"use client";
import { createContext, useContext, useState, ReactNode } from "react";
export interface AtendimentoForm {
  nome?: string;
  telefone?: string;
  especie?: string;
  nomePet?: string;
  raca?: string;
  idade?: string;
  porte?: string;
  servicosDisponiveis?: string[];
  alergias?: boolean;
  doencas?: boolean;
}

interface AtendimentoContextProps {
  atendimento: AtendimentoForm;
  setAtendimento: (data: Partial<AtendimentoForm>) => void;
  resetAtendimento: () => void;
}

const AtendimentoContext = createContext<AtendimentoContextProps | null>(null);

export function AtendimentoProvider({ children }: { children: ReactNode }) {
  const [atendimento, setAtendimentoState] = useState<AtendimentoForm>({});

  const setAtendimento = (data: Partial<AtendimentoForm>) => {
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
