import { AtividadeModel } from './atividade.model';
import { AlunoModel } from './aluno.model';

export class RespostaModel {
  id: number;
  caminho: string;
  descricao: string;
  criadoEm: Date;
  atualizadoEm: Date;
  atividade: AtividadeModel;
  aluno: AlunoModel;
}
