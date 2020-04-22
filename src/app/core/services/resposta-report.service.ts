import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { RespostaReportModel } from '../models/resposta-report.model';

@Injectable({
  providedIn: 'root'
})
export class RespostaReportService {

  private url = environment.url + '/respostas/relatorios';

  constructor(private http: HttpClient) {}

  getReportByAulaId(aulaId: number): Observable<RespostaReportModel> {
    return this.http.get<RespostaReportModel>(`${this.url}/aulas/${aulaId}`);
  }

  getReportByTurmaId(turmaId: number): Observable<RespostaReportModel> {
    return this.http.get<RespostaReportModel>(`${this.url}/turmas/${turmaId}`);
  }
}
