import { TurmaModel } from 'src/app/core/models/turma.model';

export class AulaFormModel {
  id: number;
  ordem: string;
  titulo: string;
  urlVideoGravado: string;
  descricao: string;
  descricaoExercicio: string;
  observacao: string;
  temReuniao: boolean;
  temDiscursao: boolean;
  turma: TurmaModel;
  programadoEm?: Date;
  dataAulaAoVivo?: boolean;
  horaAulaAoVivo?: string;
  tituloAulaAoVivo?: string;

  temAgendamento: boolean;
  alunoFazUpload?: boolean;
  respostaTemTexto?: boolean;
  temAulaAoVivo?: boolean;
  temDiscusao?: boolean;
  foiRealizadaAoVivo?: boolean;
}
