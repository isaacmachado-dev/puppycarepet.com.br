import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuTrigger,
    DropdownMenuSeparator,
    DropdownMenuCheckboxItem,
} from "@/app/admin/usuarios/components/lib/dropdown-menu"
import { DropdownMenuCheckboxItemProps } from "@radix-ui/react-dropdown-menu"
import { Button } from "@/components/ui/button"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"  // ← Adicione isso

type Checked = DropdownMenuCheckboxItemProps["checked"]



export default function AdminTypeEmployee({
    className,
    value = [],
    onChange
}: {
    className?: string;
    value?: string[];
    onChange?: (value: string[]) => void;
}) {
    const [dropdownActive, setDropdownActive] = useState(false);

    // Filtro de busca por tipo de funcionário selecionado
    const typeOptions = [
        { value: 'colaborador', label: 'Colaborador' },
        { value: 'condutor', label: 'Condutores' },
        { value: 'administrador', label: 'Administradores' }
    ]
    const [selectedTypes, setSelectedTypes] = useState<string[]>([])

    // Sempre que o value mudar (ex: ao abrir outro modal), atualize o selectedTypes!
    useEffect(() => {
        setSelectedTypes(value || []);
    }, [value]);


    const toggleType = (type: string, checked: boolean) => {
        let updatedTypes: string[] = [];

        if (checked) {
            updatedTypes = [...selectedTypes, type];
        } else {
            updatedTypes = selectedTypes.filter(t => t !== type);
        }
        setSelectedTypes(updatedTypes);
        if (onChange) onChange(updatedTypes);
    };


    return (
        <div>
            <DropdownMenu open={dropdownActive} onOpenChange={setDropdownActive}>
                <DropdownMenuTrigger asChild>
                    <Button
                        variant="outline"
                        className={cn(
                            "leading-5 p-2 pl-10 bg-white dark:bg-[#171717] group-hover:placeholder-black rounded-sm p-2 w-70 h-10 justify-start !text-left cursor-pointer group !ring-0 shadow-none border-2 border-none outline-2 hover:outline-2  leading-5",
                            dropdownActive && "border-black",
                            className  // ← Aplica a className passada por prop
                        )}
                    >
                        {selectedTypes.length > 0 ? (
                            <div className="flex flex-wrap gap-1 rounded-sm h-[30px]">
                                {selectedTypes.slice(0, 2).map((type) => {
                                    const tipo = typeOptions.find(opt => opt.value === type);
                                    return (
                                        <span key={type} className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                                            {tipo ? tipo.label : type}
                                        </span>
                                    );
                                })}
                                {selectedTypes.length > 2 && (
                                    <span className="bg-gray-500 text-white px-2 py-1 rounded-full text-xs flex items-center">
                                        +{selectedTypes.length - 2}
                                    </span>
                                )}
                            </div>
                        ) : (
                            <span className="group rounded-sm text-white/50 text-sm font-bold leading-5 group-hover:text-white">
                                Escolha
                            </span>
                        )}
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">

                    {/* Filtro seletor */}
                    <DropdownMenuSeparator />
                    {typeOptions.map((opt => (
                        <DropdownMenuCheckboxItem
                            key={opt.value}
                            checked={selectedTypes.includes(opt.value)}
                            onCheckedChange={(checked) => toggleType(opt.value, !!checked)}
                            className="cursor-pointer"
                        >
                            {opt.label}
                        </DropdownMenuCheckboxItem>
                    )))}

                </DropdownMenuContent >

            </DropdownMenu >
        </div >
    )
}
