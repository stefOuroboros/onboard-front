import { Injectable } from '@angular/core';
import { MonUser } from '../ajouter-client/ajouter-client.component';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  
  constructor(private _http: HttpClient) { }

  saveClient(monUser: MonUser, col: any): any {
    throw new Error("Method not implemented.");
  }
  ajouterUnUser(email:string, nom:string,mot_de_passe:string): void{
    const URL_BACKEND = environment.baseUrl;
      this._http.post(URL_BACKEND.concat("/user/utilisateur"),{"email":email,"nom":nom,"mot_de_passe":mot_de_passe},
       {headers: new HttpHeaders({ "Content-Type": "application/json"})}).toPromise().then(response => console.log(response),
       error => console.log("Erreur", error));
  }

}
