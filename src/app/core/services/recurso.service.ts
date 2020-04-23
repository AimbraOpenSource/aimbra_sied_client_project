import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RecursoModel} from '../models/recurso.model';
import {environment} from '../../../environments/environment';

@Injectable({providedIn: 'root'})
export class RecursoService {

  url: string = environment.url + '/recursos';

  constructor(private http: HttpClient) {
  }

  findAllByAulaId(aulaId: number): Observable<RecursoModel[]> {
    return this.http.get<RecursoModel[]>(`${this.url}/aulas/${aulaId}`);
  }

  findRespostasByUsername(aulaId: number): Observable<RecursoModel[]> {
    return this.http.get<RecursoModel[]>(`${this.url}/respostas?aulaId=${aulaId}`);
  }

  deleteById(atividadeId: number): Observable<any> {
    return this.http.delete(`${this.url}`, {
      params: new HttpParams().set('recursoId', atividadeId.toString())
    });
  }

}
