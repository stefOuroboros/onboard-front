import { Injectable } from '@angular/core';
import { Produit } from '../models';

@Injectable({
  providedIn: 'root'
})
export class PanierService {

  constructor() { }


  majAchat(): Array<any>  {
    let panier = localStorage.getItem('panier');
    let result = null;

    if(panier)
    {
      result = JSON.parse(panier);
    }

    return result
  }

  ajouterArticle(nombre: number, article: Produit): void {
    let maj: Boolean = false;
    let achats: Map<Produit, number> = new Map();
    let panier = this.majAchat();
    
    if(panier) {
      
      achats.set(article, nombre);
      let listAchats = Array.from(achats);

      panier.forEach( a => {
        if (a[0].nom == listAchats[0][0].nom){
          a[1] = listAchats[0][1];
          maj = true;
        }
      });
      achats = new Map(panier);
      if(!maj) {
        achats.set(article, nombre)
      }
    }

    localStorage.setItem('panier', JSON.stringify(Array.from(achats)));
  }

  supprimerArticle(article: Produit)
  {
    let panier = this.majAchat();

    if(panier)  {
      panier.forEach( a => {
        if (a[0].nom == article.nom) {
        let achats = new Map(panier);
        achats.delete(a[0]);
        localStorage.setItem('panier', JSON.stringify(Array.from(achats)));
        }
      });
    }
  }
}
