import { AulaModel } from '../models/aula.model';
import {AulaFormModel} from "../../pages/my-classes/class-form/aula-form.model";

export abstract class AulaConverter {
  static toModel(form: AulaFormModel): AulaModel {
    const aula = new AulaModel();
    aula = {
      id: form.id,
      ordem: form.ordem,
      titulo: form.titulo,
      urlVideoGravado: form.urlVideoGravado,
      descricao: form.descricao,
      observacao: form.observacao,
      temReuniao: form.temReuniao,
      temDiscursao: form.temDiscursao,
      turma: form.turma,
      reuniao: {
        dataHoraInicio: form.programadoEm,
        foiRealizada: form.foiRealizadaAoVivo,
        topico: form.tituloAulaAoVivo,

      },
      configuracao: {

      }

    }
    return new AulaModel();
  }
}

