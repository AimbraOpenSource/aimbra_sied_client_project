import {Injectable} from "@angular/core";
import {environment} from "../../../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {ZAppConfigurationModel} from "../models/z-app-configuration.model";

@Injectable({
  providedIn: 'root'
})
export class ZoomConfigurationService {

  url = environment.url + '/zoom/configurations';

  constructor(private http: HttpClient) {
  }

  public findByUserLoggedIn(): Observable<ZAppConfigurationModel> {
    return this.http.get<ZAppConfigurationModel>(`${this.url}`);
  }

  public save(configuration: ZAppConfigurationModel): Observable<ZAppConfigurationModel> {
    return this.http.post<ZAppConfigurationModel>(`${this.url}`, configuration);
  }

}
