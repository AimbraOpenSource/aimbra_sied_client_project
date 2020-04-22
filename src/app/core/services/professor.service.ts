import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProfessorModel } from 'src/app/core/models/professor.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfessorService {

  private URL = environment.url + '/professores';

  constructor(private http: HttpClient) { }

  public findByLoggedin(): Observable<ProfessorModel> {
    return this.http.get<ProfessorModel>(this.URL);
  }


}
