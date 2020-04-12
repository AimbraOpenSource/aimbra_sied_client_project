import { TurmaModel } from './turma.model';

export class AulaModel {
  id: number;
  ordem: string;
  titulo: string;
  urlVideoGravado: string;
  descricao: string;
  observacao: string;
  temReuniao: boolean;
  temDiscursao: boolean;
  turma: TurmaModel;
}
