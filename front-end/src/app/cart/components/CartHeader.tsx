import Image from "next/image";
import React from "react";

export const CartHeader: React.FC = () => (
  <div className="flex flex-row gap-2 p-8 absolute">
    <Image
      src="/logos/brand/logo-redondo-maior-rosa.png"
      alt="Petshop Puppy Care"
      width={50}
      height={50}
      className="object-contain"
      priority
    />
    <span className="bg-[#FECE14] p-2 rounded-md text-black">Atendimento</span>
    <p className="p-2 text-white">Puppy Care</p>
  </div>
);
