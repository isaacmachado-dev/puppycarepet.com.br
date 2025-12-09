import React from "react";

interface CartSubTitleHeaderProps {
  subtitle: string;
}

export const CartSubTitleHeader: React.FC<CartSubTitleHeaderProps> = ({
  subtitle,
}) => {
  return (
    <div className="mb-4">
      <p className="mb-6 text-left text-gray-700 w-full">{subtitle}</p>
    </div>
  );
};
