import { AlunoModel } from './aluno.model';
import { AulaModel } from './aula.model';

export class RespostaReportModel {
  quantidadeTotal: number;
  quantidadeDispachado: number;
  emFalta: number;
  aluno: AlunoModel;
  aula: AulaModel;
}
