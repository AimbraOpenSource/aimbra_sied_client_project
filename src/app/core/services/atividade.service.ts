import {Injectable} from "@angular/core";
import {environment} from "../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AtividadeModel} from "../models/atividade.model";

@Injectable({
  providedIn: 'root'
})
export class AtividadeService {

  private url = environment.url + '/atividades'

  constructor(private http: HttpClient) {
  }

  public findAll(): Observable<AtividadeModel[]> {
    return this.http.get<AtividadeModel[]>(this.url);
  }

  public findById(atividadeId: number): Observable<AtividadeModel> {
    return this.http.get<AtividadeModel>(this.url + `/${atividadeId}`);
  }

  public findByAulaId(aulaId: number): Observable<AtividadeModel> {
    return this.http.get<AtividadeModel>(this.url + `/aulas/${aulaId}`);
  }

  public insert(atividade: AtividadeModel, files: Set<File>): Observable<AtividadeModel> {
    const formData = new FormData();
    if (files && files.size > 0) {
      files.forEach((f: File) => formData.append('files', f));
    }
    formData.append('atividade', JSON.stringify(atividade));
    return this.http.post<AtividadeModel>(this.url, formData);
  }

}
