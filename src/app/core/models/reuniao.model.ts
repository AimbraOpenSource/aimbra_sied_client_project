import * as moment from 'moment';

export class ReuniaoModel {
  id: number;
  topico: string;
  descricao: string;
  duracao: string;
  dataHoraInicio: Date;
  fusoHorario: string;
  senha: string;
  videoAnfitriaoAtivado: boolean;
  videoParticipanteAtivado: boolean;
  foiRealizada: boolean;
  _hora: string;

  /**
   * TODO Setar hora na data acima
   * @param time
   */
  public set hora(hora: string) {
    const day = this.dataHoraInicio.getDay();
    const mouth = this.dataHoraInicio.getMonth();
    const year = this.dataHoraInicio.getFullYear();
    const time = hora.split(':');
    const hour = +time[0];
    const minutes = +time[1];
    const data = moment()
      .date(day)
      .month(mouth)
      .year(year)
      .hour(hour)
      .minute(minutes)
      .format('dd/MM/yyyy HH:mm:ss');
  }

  public get hora() {
    return this._hora;
  }
}
