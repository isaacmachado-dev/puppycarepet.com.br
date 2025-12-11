import React from "react";

export default function LoginLevelAccess() {
  return (
    <>
    <label>Nível de Acesso</label>
      <select
        className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-rose-500"
        defaultValue=""
      >
        <option value="" disabled>
          Selecione o nível de acesso
        </option>
        <option value="user">Cliente</option>
        <option value="guest">Colaborador</option>
      </select>
    </>
  );
}
