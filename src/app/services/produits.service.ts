import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitFromJson, Caracteristiques, Marque, Produit, Discipline } from '../models';
import { Injectable } from '@angular/core';
import { map, filter } from 'rxjs/operators';
import { MonForm } from '../ajouter-produit/ajouter-produit.component';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServices {
  private _urlJson = 'http://localhost:3000/produits';
  constructor(private _http: HttpClient) { }

  listerProduitsDepuisJson(): Observable<ProduitFromJson[]> {
    return this._http.get<ProduitFromJson[]>(this._urlJson);
  }

  listerProduits(): Observable<Produit[]> {
    const URL_BACKEND = environment.baseUrl + 'produits';
    return this._http.get<Produit[]>(URL_BACKEND);
  }

  ajouterUnProduit(reference:string, nom :string, prix:number, quantite:number,photo:string, caracteristiques:Caracteristiques, marque:Marque,description:string,flex:number[]):Promise<MonForm> {
    const URL_BACKEND = environment.baseUrl + 'produits';
    return this._http.post(URL_BACKEND.concat("/new/"),{ "reference":reference, "nom":nom, "prix":prix, "quantite":quantite,"photos":photo,"caracteristiques":caracteristiques,"marque":marque,"flex":flex,"description":description },
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then((c:MonForm)=>c);
  }

  rechercherProduit(nom: string, reference: string, marque: string, discipline: string) {
    const URL_BACKEND = environment.baseUrl + `produits/search?nom=${nom}&marque=${marque}&reference=${reference}&discipline=${discipline}`;
    return this._http.get<Produit[]>(URL_BACKEND);
  }

}
