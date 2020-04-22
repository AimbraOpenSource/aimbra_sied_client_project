import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { RespostaModel } from '../models/resposta.model';

@Injectable({
  providedIn: 'root'
})
export class RespostaService {
  private url = environment.url + '/respostas';

  constructor(private http: HttpClient) {}

  insert(resposta: RespostaModel): Observable<RespostaModel> {
    return this.http.post<RespostaModel>(`${this.url}`, resposta);
  }

  update(resposta: RespostaModel): Observable<RespostaModel> {
    return this.http.put<RespostaModel>(`${this.url}`, resposta);
  }

  findByAtividadeAndUserLoggeIn(atividadeId: number): Observable<RespostaModel> {
    return this.http.get<RespostaModel>(`${this.url}/atividades/${atividadeId}`);
  }

  findByAulaId(aulaId: number): Observable<RespostaModel[]> {
    return this.http.get<RespostaModel[]>(`${this.url}`, {
      params: new HttpParams().set(
        'aulaId', aulaId.toString()
      )
    });
  }
}
