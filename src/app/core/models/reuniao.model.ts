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
  hora: string

  /**
   * TODO Setar hora na data acima
   * @param time
   */
  public set appendTimeOnData(time: string) {

  }
}
