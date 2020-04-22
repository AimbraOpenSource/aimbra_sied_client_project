import { TurmaModel } from './turma.model';
import { AtividadeModel } from './atividade.model';
import {ReuniaoModel} from "./reuniao.model";
import {AulaConfiguracaoModel} from "./aula-configuracao.model";



export class AulaModel {
  id: number;
  ordem: string;
  titulo: string;
  urlVideoGravado: string;
  descricao: string;
  observacao: string;
  temReuniao: boolean;
  temDiscursao: boolean;
  turma: TurmaModel;
  reuniao: ReuniaoModel;
  configuracao: AulaConfiguracaoModel;
}

