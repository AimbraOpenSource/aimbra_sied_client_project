import {AulaModel} from "./aula.model";

export class AtividadeModel {
  id: number;
  titulo: string;
  descricao: string;
  criadoEm: string;
  liberadoEm: string;
  aula: AulaModel;

}
