import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitFromJson, Caracteristiques, Marques } from '../models';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { MonForm } from '../ajouter-produit/ajouter-produit.component';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServices {
  private _urlJson = 'http://localhost:3000/produits';
  private _url = 'http://localhost:8080/produits';
  constructor(private _http: HttpClient) { }

  listerProduitsDepuisJson(): Observable<ProduitFromJson[]> {
    return this._http.get<ProduitFromJson[]>(this._urlJson);
  }

  ajouterUnProduit(reference:string, nom :string, prix:number, quantite:number,photo:string, caracteristiques:Caracteristiques, marques:Marques,description:string,flex:number[]):Promise<MonForm>{
    return this._http.post(this._url.concat("/new/"),{ "reference":reference, "nom":nom, "prix":prix, "quantite":quantite,"photos":photo,"caracteristiques":caracteristiques,"marques":marques,"flex":flex,"description":description },
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then((c:MonForm)=>c);
  }
}
