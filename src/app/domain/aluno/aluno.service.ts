import { HttpClient } from '@angular/common/http';
import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { AlunoModel } from 'src/app/core/models/aluno.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlunoService {

  private URL = environment;

  constructor(private http: HttpClient) { }


}
