import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../auth/auth.domains';
import { Produit } from '../models';
import { PanierService } from '../services/panier.service';

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.css']
})
export class PanierComponent implements OnInit {
  achats: Array<any>;
  total: number = 0;

  constructor(private _panierServ: PanierService) {
    
  }

  ngOnInit() {
    this.achats = this._panierServ.majAchat()
    this.calculeTotal();
  }

  modifierProduit(article) {
    this._panierServ.ajouterArticle(article[1],new Produit({}));
    this.calculeTotal();
  }

  supprimerProduit(article){
    this._panierServ.supprimerArticle(article[0]);
    this.achats = this._panierServ.majAchat();
    this.calculeTotal();
  }

  calculeTotal(){
    this.total=0;
    if(this.achats)
    {
      this.achats.forEach(article => this.total += article[0].prix * article[1])
    }
  }
}
