import { Component, OnInit } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { Produit } from '../models';

@Component({
  selector: 'app-liste-produits',
  template: `
    <div *ngFor="let prod of produits">
      <p>{{prod.nom}}</p>
    </div>
  `,
  styles: []
})
export class ListeProduitsComponent implements OnInit {

  constructor(private _produitsServices: ProduitsServices) { }

  produits: Produit[];

  listerProduits() {
    this._produitsServices.listerProduitsDepuisJson().subscribe(pJson => this.produits = pJson);
  }
  ngOnInit() {
  }

}
