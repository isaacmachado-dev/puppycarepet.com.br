import { AdminBlock, AdminBlockTitle, AdminHistoricList } from "@/components/ui/custom/AdminSettings";

export default function HistoricoPage() {
  return (
    <div className="p-6">
      <AdminBlock>
        <AdminBlockTitle>Histórico de Pedidos</AdminBlockTitle>
        <AdminHistoricList>
            
        </AdminHistoricList>
        {/* Aqui você pode adicionar mais componentes ou funcionalidades relacionadas ao histórico */}
      </AdminBlock>
    </div>
  );
}