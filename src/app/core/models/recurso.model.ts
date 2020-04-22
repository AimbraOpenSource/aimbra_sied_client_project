import {AulaModel} from "./aula.model";

export class RecursoModel {
  id: number;
  nomeReal: string;
  nomeLogico: string;
  caminho: string;
  criadoEm: Date;
  atualizadoEm: Date;
  aula: AulaModel;
  file: File;
}
