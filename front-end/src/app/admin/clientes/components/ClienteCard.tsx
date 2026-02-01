'use client';

import Image from 'next/image';
import DropdownMenuDialog from './ClienteEdit';
import { Cliente } from '../types/cliente';

interface clientesCardProps {
  clientes: Cliente[];
  onUpdated?: () => void;
}

export default function clientesCard({ clientes, onUpdated }: clientesCardProps) {

  return (
    <div className="grid md:grid-cols-4 gap-4 mt-10">
      {clientes.map((cliente) => (
        <div
          key={cliente.id}
          className="flex bg-[#D9D9D9] dark:bg-[#242424] rounded-md mt-2 flex-col justify-center relative"
        >
          <div className='p-2'>
            <div className="flex justify-end p-1 absolute top-0 right-0">
              <DropdownMenuDialog
                cliente={cliente}
                onUpdated={onUpdated}
              />
            </div>

            <div className="w-[150px] h-[150px] rounded-full overflow-hidden mx-auto">
              <Image
                src={cliente.image || '/default-user.png'}
                width={200}
                height={200}
                alt={cliente.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="flex flex-col mx-auto">
              <h3 className="mx-auto dark:text-white">{cliente.name}</h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
