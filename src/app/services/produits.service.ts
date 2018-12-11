import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Produit } from '../models';

export class ProduitsServices {
  constructor(private _http: HttpClient) { }

  listerProduitsDepuisJson(): Observable<Produit[]> {
    const httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) };
    return this._http.get<Produit[]>('http://localhost:3000/produits', httpOptions);
  }
}
