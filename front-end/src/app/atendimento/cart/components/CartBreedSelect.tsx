import React from "react";

interface CartBreedSelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  species: string;
}

const dogBreeds = [
  { value: "Labrador Retriever", label: "Labrador Retriever" },
  { value: "Bulldog Francês", label: "Bulldog Francês" },
  { value: "Beagle", label: "Beagle" },
  { value: "Poodle", label: "Poodle" },
  { value: "Pastor Alemão", label: "Pastor Alemão" },
];

const catBreeds = [
  { value: "Siamês", label: "Siamês" },
  { value: "Persa", label: "Persa" },
  { value: "Maine", label: "Maine" },
];

export const CartBreedSelect: React.FC<CartBreedSelectProps> = ({ label, species, ...props }) => {
  const options = species === "Gato" ? catBreeds : dogBreeds;
  return (
    <div className="flex flex-col col-span-1">
      <label>{label}</label>
      <select
        className="p-3 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-[#E72989] transition w-full"
        {...props}
      >
        <option value="" disabled>
          Selecione a raça do seu pet
        </option>
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
};
