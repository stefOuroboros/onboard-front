import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitsServices } from '../services/produits.service';
import { Produit, Discipline, Marque } from '../models';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MonForm } from '../ajouter-produit/ajouter-produit.component';

@Component({
  selector: 'app-search-gestion',
  templateUrl: './search-gestion.component.html',
  styleUrls: ['./search-gestion.component.css']
})
export class SearchGestionComponent implements OnInit {

  @Input() produits: Produit[] = null;

  monForm:MonForm = new MonForm();
  nom: string;
  reference: string;
  discipline: string;
  marque: string;

  constructor(private route: ActivatedRoute, private _prodService: ProduitsServices, private _httpClient: HttpClient){

    this.nom = route.snapshot.paramMap.get("nom");
    this.reference = route.snapshot.paramMap.get("reference");
    this.marque = route.snapshot.paramMap.get("marque");
    this.discipline = route.snapshot.paramMap.get("discipline");


  }

  submit() {
    this._prodService.rechercherProduit(this.nom, this.reference, this.marque, this.discipline).subscribe((produitData) => this.produits = produitData);
  }

  ngOnInit() {
  }

}
