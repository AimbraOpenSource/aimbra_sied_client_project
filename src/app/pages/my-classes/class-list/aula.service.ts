import { AulaModel } from './../../../core/models/aula.model';
import { Observable } from 'rxjs';
import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';

@Injectable({providedIn: 'root'})
export class AulaService {


  private url = environment.url + '/aulas';

  constructor(private http: HttpClient) { }

  public findAllByTurmaId(turmaId: number): Observable<AulaModel[]> {
    return this.http.get<AulaModel[]>(`${this.url}/turmas/${turmaId}`);
  }

  findById(aulaId: number): Observable<AulaModel> {
    return this.http.get<AulaModel>(`${this.url}/${aulaId}`);
  }

  deleteById(id: number): Observable<any> {
    const pamameters = new HttpParams().set('aulaId', id.toString());
    return this.http.delete(`${this.url}`, { params: pamameters })
  }
}
