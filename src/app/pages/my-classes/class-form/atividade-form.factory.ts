import { AtividadeModel } from 'src/app/core/models/atividade.model';

export abstract class AtividadeFormFactory {
  static build(formValue: any): AtividadeModel {
    const atividade = new AtividadeModel();
    atividade.aula.titulo = formValue.infoGroup.titulo;
    atividade.aula.urlVideoGravado = formValue.infoGroup.urlVideoGravado;
    atividade.aula.descricao = formValue.infoGroup.descricao;
    atividade.aula.observacao = formValue.infoGroup.observacao;

    atividade.titulo = formValue.exercicioGroup.titulo;
    atividade.descricao = formValue.exercicioGroup.descricao;
    atividade.aula.configuracao.alunoFazUpload = formValue.exercicioGroup.alunoFazUpload;
    atividade.aula.configuracao.respostaTemTexto = formValue.exercicioGroup.respostaTemTexto;

    atividade.aula.configuracao.temAulaAoVivo = formValue.zoomGroup.temAulaAoVivo;
    atividade.aula.reuniao.dataHoraInicio = formValue.zoomGroup.dataHoraInicio;
    atividade.aula.reuniao.hora = formValue.zoomGroup.horario;
    atividade.aula.reuniao.topico = formValue.zoomGroup.topico;

    atividade.aula.configuracao.temDiscusao = formValue.disqusGroup.temDiscusao;

    atividade.liberadoEm = formValue.scheduleGroup.liberadoEm;
    atividade.aula.configuracao.temAgendamento = formValue.scheduleGroup.temAgendamento;

    return atividade;
  }
}
