import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitFromJson } from '../models';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServices {
  private _url = 'http://localhost:3000/produits';

  constructor(private _http: HttpClient) { }

  listerProduitsDepuisJson(): Observable<ProduitFromJson[]> {
    return this._http.get<ProduitFromJson[]>(this._url);
  }

  ajouterUnProduit(){
    return
  }
}
