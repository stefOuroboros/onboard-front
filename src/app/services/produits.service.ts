import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ProduitFromJson, Marque, Produit, Discipline } from '../models';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProduitsServices {

  constructor(private _http: HttpClient) { }

  listerProduits(): Observable<Produit[]> {
    const URL_BACKEND = environment.baseUrl + 'produits';
    return this._http.get<Produit[]>(URL_BACKEND);
  }

  trouverParNom(nom: string): Observable<Produit>{
    const URL_BACKEND = environment.baseUrl;
    return this._http.get<Produit>(URL_BACKEND + 'produits/' + nom);
  }

  ajouterUnProduit(reference: string, nom: string, prix: number, photo: string, quantite: number, longueur: number,
    largeur: number, poids: number, largeurRoues: number, empatement: number, marque: string, discipline: Discipline,
    description: string, actif: boolean): void {
    const URL_BACKEND = environment.baseUrl + 'produits';
    console.log(nom)
    this._http.post(URL_BACKEND.concat("/new"),{ "reference":reference, "nom":nom, "prix":prix,
   "photos":photo,"quantite":quantite,"longueur":longueur,"largeur":largeur,"poids":poids,
   "largeurRoues":largeurRoues,"empatement":empatement,"marque":marque,"discipline":discipline,
   "description":description,"actif":actif },
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then(response => console.log(response),
    error => console.log("Erreur", error));
  } // ajout d'un produit avec tous les paramètres pris en compte

  rechercherProduit(nom: string, reference: string, marque: string, discipline: string, prixMin = 0, prixMax = 1500, sort = 'asc', pageNbr = 0, nbrByPage = 10): Observable<Produit[]> {
    const URL_BACKEND = environment.baseUrl;
    return this._http.get<Produit[]>(URL_BACKEND + `produits/search?nom=${nom}&marque=${marque}&reference=${reference}&discipline=${discipline}&prixMin=${prixMin}&prixMax=${prixMax}&sort=${sort}&pageNbr=${pageNbr}&nbrByPage=${nbrByPage}`);
  } // rechercher un produit selon le nom, la référence, la marque, la discipline +++

  deleteUnProduit(reference: string):Observable<void>{
    const URL_BACKEND = environment.baseUrl+`produits/${reference}` ;
    return this._http.delete<void>(URL_BACKEND);
  }// supprime un produit


  modifierUnProduit(produit :Produit):void {
    const URL_BACKEND = environment.baseUrl + `produits/edit/${produit.reference}`;
   this._http.post(URL_BACKEND, produit ,
    {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then(response => console.log(response),
    error => console.log("Erreur", error));
  } // modifie une produit selon la référence du produit
}
