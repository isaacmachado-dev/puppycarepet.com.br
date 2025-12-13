import { AdminBlock, AdminBlockTitle } from "../../../components/ui/custom/AdminSettings";
import { ChartPieInteractive } from "./components/chart-pie-interactive";
import { ChartRadialShape } from "./components/chart-radial-shape";
import { ChartAreaInteractive } from "./components/chart-area-interactive";

export default function AnalisePage() {
  return (
    <div>

      <AdminBlock className="">
        <AdminBlockTitle>Resumo Geral</AdminBlockTitle>

        <div className="bg-white dark:bg-[#171717] rounded-xl p-5">
          <div className="flex flex-row gap-5 justify-center">

            <div className="basis-1/2 max-w-xl">
              <ChartPieInteractive />
            </div>
            <div className="basis-1/2 max-w-xl">
              <ChartRadialShape />
            </div>
          </div>
        </div>

      </AdminBlock >

      <AdminBlock className="mt-10">
        <ChartAreaInteractive />
      </AdminBlock >

      {
        /* 
              <AdminBlock>
                <AdminBlockTitle>Análise Estatística</AdminBlockTitle>
        
                <div className="flex flex-row">
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>87 Clientes</h3>
                  </div>
        
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>87 Pets</h3>
                  </div>
        
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>20 Assinaturas</h3>
                  </div>
                </div>
              </AdminBlock>
        
              <AdminBlock>
                <AdminBlockTitle>Petshop</AdminBlockTitle>
        
                <div className="flex flex-row">
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>Total de Visitantes:</h3>
                    <p>3,542</p>
                  </div>
        
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>Clientes Novos:</h3>
                    <p>852</p>
                  </div>
        
                  <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                    <h3>Vendas:</h3>
                    <p>R$ 20,000</p>
                  </div>
                </div>
              </AdminBlock>
        
              <AdminBlock>
                <div>
                  <AdminBlockTitle>Resultados</AdminBlockTitle>
        
                  <div className="flex flex-row">
                    <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                      <h3>Visualizações de página:</h3>
                      <p>5,248</p>
                    </div>
        
                    <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                      <h3>Taxa de rejeição:</h3>
                      <p>36%</p>
                    </div>
        
                    <div className="ml-10 bg-[#FFFFFF] p-5 rounded-md">
                      <h3>Duração média da sessão:</h3>
                      <p>36%</p>
                    </div>
                  </div>
                </div>
              </AdminBlock> */
      }





    </div >
  );
}
