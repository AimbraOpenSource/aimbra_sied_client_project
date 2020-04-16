import {AulaModel} from "./aula.model";

export class AtividadeModel {
  id: number;
  titulo: string;
  descricao: string;
  criadoEm: Date;
  liberadoEm: Date;
  aula: AulaModel;
}
