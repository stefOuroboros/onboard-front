import { Component, OnInit, Input } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { Produit } from '../models';

@Component({
  selector: 'app-liste-produits',
  templateUrl:'./liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  @Input() produits: Produit[] = null;

  constructor(private _produitsServices: ProduitsServices) { }

  ngOnInit() {
    this._produitsServices.listerProduits()
    .subscribe((produitData) => this.produits = produitData);
  }

  delete(produitASupprimer:Produit){
    this.produits.splice(this.produits.findIndex(p => p === produitASupprimer),1)
  }
}
