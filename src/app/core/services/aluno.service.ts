import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlunoModel } from '../models/aluno.model';
import { AlunoOfProfessor } from 'src/app/domain/aluno/aluno-of-professor.model';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private url = environment.url + '/alunos';

  constructor(private http: HttpClient) {}

  findAllOfProfessor(): Observable<AlunoOfProfessor[]> {
    return this.http.get<AlunoOfProfessor[]>(`${this.url}/professores`);
  }

  public findByLoggedin(): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(this.url);
  }

}
