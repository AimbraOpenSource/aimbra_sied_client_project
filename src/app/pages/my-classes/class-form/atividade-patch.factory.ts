import { AtividadeModel } from 'src/app/core/models/atividade.model';

export abstract class AtividadePatchFactory {
  static getBody(atividade: AtividadeModel): any {
    return {
      infoGroup: {
        titulo: atividade.aula.titulo,
        urlVideoGravado: atividade.aula.urlVideoGravado,
        descricao: atividade.aula.descricao,
        observacao: atividade.aula.descricao
      },
      exercicioGroup: {
        titulo: atividade.titulo,
        descricao: atividade.aula.descricao,
        alunoFazUpload: atividade.aula.configuracao.alunoFazUpload,
        respostaTemTexto: atividade.aula.configuracao.respostaTemTexto
      },
      zoomGroup: {
        temAulaAoVivo: atividade.aula.configuracao.temAulaAoVivo,
        dataHoraInicio: atividade.aula.reuniao.dataHoraInicio,
        horario: atividade.aula.reuniao.hora,
        topico: atividade.aula.reuniao.topico,
      },
      disqusGroup: {
        temDiscusao: atividade.aula.configuracao.temDiscusao
      },
      scheduleGroup: {
        liberadoEm: atividade.liberadoEm,
        temAgendamento: atividade.aula.configuracao.temAgendamento,
      }
    };
  }

}
