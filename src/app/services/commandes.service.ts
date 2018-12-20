import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Commande } from '../models';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommandesServices {

  constructor(private _http: HttpClient) { }

  listerCommandes(): Observable<Commande[]> {
    const URL_BACKEND = environment.baseUrl + 'commandes';
    return this._http.get<Commande[]>(URL_BACKEND);
  }
}
