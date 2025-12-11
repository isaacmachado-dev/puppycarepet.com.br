import React from "react";
import Image from "next/image";

interface LoginHeaderProps {
  label: string;
  text: string;
  className?: string;
  priority?: boolean;
}

export const LoginHeader: React.FC<LoginHeaderProps> = ({ label, text, className = "object-contain", priority = true }) => {
  return (
    <div className="flex flex-row justify-start mb-6 gap-[3px] items-center">
      <Image
        src="/logos/brand/logo-redondo-rosa.png"
        alt="Petshop Puppy Care"
        width={50}
        height={50}
        className={className}
        priority={priority}
      />
      <span className="bg-[#FECE14] p-2 m-2 rounded-md text-black font-bold">
        <label>{label}</label>
      </span>
      {text && (
        <span className="text-white">
          {text}
        </span>
      )}
    </div>
  );
};
