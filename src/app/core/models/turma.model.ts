import { AlunoModel } from './aluno.model';
import { ProfessorModel } from './professor.model';

export class TurmaModel {
  id: number;
  senha: string;
  uuid: string;
  curso: any;
  alunos: AlunoModel[];
  professor: ProfessorModel;
}
