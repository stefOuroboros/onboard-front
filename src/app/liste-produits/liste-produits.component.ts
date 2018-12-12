import { Component, OnInit, Input } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { ProduitFromJson } from '../models';

@Component({
  selector: 'app-liste-produits',
  templateUrl:'./liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  @Input() produits: ProduitFromJson[] = null;

  constructor(private _produitsServices: ProduitsServices) { }

  ngOnInit() {
    this._produitsServices.listerProduitsDepuisJson()
    .subscribe((produitData) => this.produits = produitData);
  }
}
