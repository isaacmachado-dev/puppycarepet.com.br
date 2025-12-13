import { AdminBlock, AdminBlockTitle } from "@/components/ui/custom/AdminSettings";
import "./components/switch-dark-light.css";
import ModeSwitchDarkLight from "./components/switch-dark-light";

export default function OpcoesPage() {
    return (
        <div>
            <AdminBlock>
                <AdminBlockTitle>Tema</AdminBlockTitle>

                <div className="flex flex-row gap-4 bg-white dark:bg-[#171717] dark:text-white p-5 rounded-[2rem]">
                    <ModeSwitchDarkLight />
                    <span className="my-auto">
                        Modo escuro
                    </span>
                </div>


            </AdminBlock>
        </div>
    );
}