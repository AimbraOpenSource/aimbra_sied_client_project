import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {TurmaModel} from "../models/turma.model";

@Injectable({
  providedIn: 'root'
})
export class InscricaoService {

  url = environment.url + '/inscricoes';

  constructor(private http: HttpClient) {
  }

  findAll(): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(`${this.url}`);
  }

  insertAluno(uuid: string, senha: string): Observable<TurmaModel> {
    const reqParams = new HttpParams().set('senha', senha);
    return this.http.get<TurmaModel>(`${this.url}/turmas/${uuid}`, { params: reqParams });
  }

}
