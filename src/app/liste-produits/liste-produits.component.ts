import { Component, OnInit } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { ProduitFromJson } from '../models';

@Component({
  selector: 'app-liste-produits',
  template: `
    <div *ngFor="let prod of produits">
      <p>Nom : {{prod.nom}} Longueur :{{prod.caracteristiques.longueur}} cm</p>
    </div>
  `,
  styles: []
})
export class ListeProduitsComponent implements OnInit {

  produits: ProduitFromJson[] = null;

  constructor(private _produitsServices: ProduitsServices) { }

  ngOnInit() {
    console.log('coucou');
    this._produitsServices.listerProduitsDepuisJson()
    .subscribe((produitData) => this.produits = produitData);
  }
}
