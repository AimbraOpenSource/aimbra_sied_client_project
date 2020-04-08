import { UserModel } from './user.model';
import { TurmaModel } from './turma.model';

export class AlunoModel {
  id: number;
  nome: string;
  user: UserModel;
  turmas: TurmaModel[];
}
