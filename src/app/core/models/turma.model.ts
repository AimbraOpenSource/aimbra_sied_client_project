import { AlunoModel } from './aluno.model';
import { ProfessorModel } from './professor.model';
import { CursoModel } from './curso.model';

export class TurmaModel {
  id: number;
  senha: string;
  uuid: string;
  curso: CursoModel;
  alunos: AlunoModel[];
  professor: ProfessorModel;
}
