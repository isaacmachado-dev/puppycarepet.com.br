import React from "react";
import Image from "next/image";
import Link from "next/link";

interface CartHeaderProps {
  label: string;
  text: string;
  className?: string;
  priority?: boolean;
}

export const CartHeader: React.FC<CartHeaderProps> = ({
  label,
  text,
  className = "object-contain",
  priority = true,
}) => {
  return (
    <div className="flex flex-row justify-start mb-6 gap-[3px] items-center">
      <Link href="/">
        <Image
          src="/logos/brand/logo-redondo-rosa.png"
          alt="Petshop Puppy Care"
          width={50}
          height={50}
          className={className}
          priority={priority}
        />
      </Link>
      <span className="bg-[#FECE14] p-2 m-2 rounded-md text-black font-bold">
        <label>{label}</label>
      </span>
      {text && <span className="text-white">{text}</span>}
    </div>
  );
};
