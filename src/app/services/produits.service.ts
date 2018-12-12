import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models';

export class ProduitsServices {
  constructor(private _http: HttpClient) { }

  listerProduitsDepuisJson(): Observable<Produit[]> {
    return this._http.get<Produit[]>('http://localhost:3000/produits');
  }
}
