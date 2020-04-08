import { AlunoModel } from './aluno.model';
import { ProfessorModel } from './professor.model';

export class TurmaModel {
  id: string;
  senha: string;
  curso: any;
  alunos: AlunoModel[];
  professor: ProfessorModel;
}
