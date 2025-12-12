import React from "react";

export function CartLinkInfo() {
  return (
    <div
      className="mt-6 text-left"
      role="alert"
    >
      <ul className="text-sm text-black flex flex-col md:flex-row gap-2 md:gap-4 m-0 p-0">
        <li>
          <a href="/login/criar-uma-nova-conta" className="relative group">
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            Já esteve aqui antes?
          </a>
        </li>
        <li>
          <a href="/login" className="relative group">
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full"></span>
            Acessar sua conta
          </a>
        </li>
      </ul>
    </div>
  );
}
