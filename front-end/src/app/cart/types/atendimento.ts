export interface Atendimento {
  id?: number;
  name: string;
  telephone: string;
  petName: string;
  petSpecies: string;
  petBreed: string;
  petAge: number;
  petSize: string;
  clienteId: number;
  petId: number;
  servicoId: number;
  valorCobrado: number;
  dataAtendimento: string;
  horarioAtendimento: string;
  pulgas?: boolean;
  carrapatos?: boolean;
  temperamentos?: boolean;
  alergias?: boolean;
  doencas?: boolean;
  servicosDisponiveis: string[];
  notas?: string;
}