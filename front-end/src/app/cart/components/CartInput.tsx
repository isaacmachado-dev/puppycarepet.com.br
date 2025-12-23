import React from "react";
import { formatPhone } from "../utils/formatPhone";

interface CartInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

// Padrão de validação baseado em __tests__/telefone.test.js
// (XX)[2-9]XXXX-XXXX - terceiro dígito deve ser 2-9, não pode ser 0 ou 1
// Comprimento mínimo: 13 caracteres (rejeita preenchimento incompleto)
const PHONE_PATTERN = /^\(\d{2}\)[2-9]\d{3,4}-\d{4}$/;
const PHONE_MIN_LENGTH = 13;
const PHONE_ERROR_MESSAGE = "Informe um telefone completo e válido. Formato: (XX)XXXXX-XXXX";
const PHONE_REQUIRED_MESSAGE = "Campo obrigatório: informe seu telefone no formato (XX)XXXXX-XXXX";

const isValidPhone = (telefone: string): boolean => {
  return PHONE_PATTERN.test(telefone) && telefone.length >= PHONE_MIN_LENGTH;
};

export const CartInput: React.FC<CartInputProps> = ({ label, ...props }) => {
  // Se for campo telefone, aplica máscara formatPhone
  const handleInput = (e: React.FormEvent<HTMLInputElement>) => {
    if (props.type === "tel" && props.name === "telephone") {
      const input = e.currentTarget;
      input.value = formatPhone(input.value);
    }
    if (props.onInput) props.onInput(e);
  };

  // Se for telefone, adiciona validações baseadas no padrão definido em __tests__/telefone.test.js
  const finalProps = { ...props };
  if (props.type === "tel" && props.name === "telephone") {
    finalProps.pattern = "^\\(\\d{2}\\)[2-9]\\d{3,4}-\\d{4}$";
    finalProps.minLength = PHONE_MIN_LENGTH;
    finalProps.title = PHONE_ERROR_MESSAGE;
    finalProps.required = true;
    finalProps.onInvalid = (e: React.InvalidEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      if (!input.value || input.value.trim().length === 0) {
        input.setCustomValidity(PHONE_REQUIRED_MESSAGE);
      } else {
        input.setCustomValidity(PHONE_ERROR_MESSAGE);
      }
    };
    finalProps.onInput = (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      handleInput(e); // apenas aplica máscara
      input.setCustomValidity(""); // deixa o browser validar pattern/minLength/required
    };
    // onBlur deixa o browser aplicar validação nativa
    finalProps.onBlur = (e: React.FocusEvent<HTMLInputElement>) => {
      const input = e.currentTarget;
      if (!input.value || input.value.trim().length === 0) {
        input.setCustomValidity(PHONE_REQUIRED_MESSAGE);
      } else if (!isValidPhone(input.value)) {
        input.setCustomValidity(PHONE_ERROR_MESSAGE);
      } else {
        input.setCustomValidity("");
      }
    };
  }

  return (
    <div className="flex flex-col col-span-1">
      <label>{label}</label>
      <input
        suppressHydrationWarning
        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
        {...finalProps}
      />
    </div>
  );
};
