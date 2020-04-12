import { environment } from '../../../environments/environment';
import { TurmaModel } from '../../core/models/turma.model';
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

  public removeAll(selected: TurmaModel[]): Observable<void> {
    return this.http.put<void>(this.url + '/professor/removeAll', selected);
  }

  public findByUuid(uuid: string): Observable<TurmaModel> {
    return this.http.get<TurmaModel>(`${this.url}/${uuid}`);
  }

  findById(turmaId: number): Observable<TurmaModel> {
    const params = new HttpParams().set('turmaId', turmaId.toString());
    return this.http.get<TurmaModel>(`${this.url}`, { params });
  }

  studentRegistration(key: string, uuidTurma: string): Observable<any> {
    return this.http.get(this.url + '/aluno/' + uuidTurma, { params : { senha: key }});
  }

  findAllByStudentLoggedIn(): Observable<TurmaModel[]> {
    return this.http.get<TurmaModel[]>(this.url + '/aluno');
  }

}
