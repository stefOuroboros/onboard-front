import { Component, OnInit, Input } from '@angular/core';
import { Produit } from '../models';
import { ProduitsServices } from '../services/produits.service';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-detail-produit',
  templateUrl: './detail-produit.component.html',
  styleUrls: ['./detail-produit.component.css']
})
export class DetailProduitComponent implements OnInit {

  @Input() produit = new Produit("");
  nom: string;

  constructor(private _produitsServices: ProduitsServices, private route: ActivatedRoute, private _httpClient: HttpClient) {
    this.nom = this.route.snapshot.paramMap.get("nom");
    this._produitsServices.trouverParNom(this.nom).subscribe(produitData => this.produit = produitData);
  }

  ngOnInit() {
  }
}
