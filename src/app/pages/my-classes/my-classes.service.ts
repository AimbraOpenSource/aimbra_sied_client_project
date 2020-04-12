import { environment } from './../../../environments/environment';
import { TurmaModel } from './../../core/models/turma.model';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CursoModel } from 'src/app/core/models/curso.model';

@Injectable({providedIn: 'root'})
export class TurmaService {


  private url = environment.url + '/turmas';

  constructor(private http: HttpClient) { }

  public findAllByProfessorLoggedIn(): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(this.url + '/professor');
  }

  public create(curso: CursoModel): Observable<TurmaModel> {
    return this.http.post<TurmaModel>(this.url + '/professor', curso);
  }
  removeAll(selected: TurmaModel[]): Observable<void> {
    return this.http.put<void>(this.url + '/professor/removeAll', selected);
  }

}
