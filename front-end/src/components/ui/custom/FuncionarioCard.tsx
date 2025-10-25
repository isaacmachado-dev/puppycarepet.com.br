'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import DropdownMenuDialog from './FuncionarioConfig';


interface Funcionario {
  id: number;
  name: string;
  image: string;
}


export default function FuncionariosList() {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  useEffect(() => {
    fetch('/api/funcionarios') // rota que você criou
      .then(res => res.json())
      .then(data => setFuncionarios(data))
      .catch(err => console.error('Erro ao buscar funcionários:', err));
  }, []);

  return (
    <div className="grid grid-cols-4 gap-4 mt-10">
      {funcionarios.map((func) => (
        <div
          key={func.id}
          className="flex bg-[#D9D9D9] rounded-md mt-2 flex-col justify-center relative"
        >
          <div className="flex justify-end p-1 absolute top-0 right-0">
            <DropdownMenuDialog />
          </div>

          <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
            <Image
              src={func.image}
              width={200}
              height={200}
              alt={func.name}
              className="w-full h-full object-cover"
            />
          </div>

          <div className="flex flex-row">
            <h3 className="mx-auto">{func.name}</h3>
          </div>
        </div>
      ))}
    </div>
  );
}
