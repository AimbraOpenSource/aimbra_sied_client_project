import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private URL = environment.url + '/alunos';

  constructor(private http: HttpClient) { }

  public findByLoggedin(): Observable<AlunoModel> {
    return this.http.get<AlunoModel>(this.URL);
  }


}
