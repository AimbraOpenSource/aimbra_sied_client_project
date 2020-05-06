import * as moment from 'moment';

export class ReuniaoModel {
  id: number;
  topico: string;
  descricao: string;
  duracao: string;
  dataHoraInicio: string;
  fusoHorario: string;
  senha: string;
  videoAnfitriaoAtivado: boolean;
  videoParticipanteAtivado: boolean;
  foiRealizada: boolean;
  hora: string;
}
