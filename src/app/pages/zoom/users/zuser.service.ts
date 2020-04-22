import { environment } from './../../../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ZUserModel } from 'src/app/core/zoom-api/models/z-user.model';

@Injectable({
  providedIn: 'root'
})
export class ZuserService {

  private url = environment.url + '/zoom/users';

  constructor(private http: HttpClient) { }

  findAll(): Observable<ZUserModel[]> {
    return this.http.get<ZUserModel[]>(this.url);
  }
}
