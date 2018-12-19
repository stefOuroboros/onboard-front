import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ProduitsServices } from '../services/produits.service';
import { Produit, Discipline, Marque } from '../models';
import { environment } from '../../environments/environment';
import { ActivatedRoute } from '@angular/router';
import { MonForm } from '../ajouter-produit/ajouter-produit.component';

@Component({
  selector: 'search',
  templateUrl: './search-gestion.component.html',
  styleUrls: ['./search-gestion.component.css']
})
export class SearchGestionComponent implements OnInit {

  @Input() produits: Produit[] = null;

  form: MonForm;
  nom: string;
  reference: string;
  discipline: string;
  marque: string;
  prixMin: number;
  prixMax: number;
  sort: string;
  keys: string[];
  keysDiscipline: string[];
  @Input() marques = Marque;
  @Input() disciplines = Discipline

  constructor(private route: ActivatedRoute, private _prodService: ProduitsServices, private _httpClient: HttpClient){

    this.form = new MonForm();
    this.keys = Object.keys(this.marques).filter(m=> !isNaN(Number(m)));
    this.keysDiscipline = Object.keys(this.disciplines).filter(d=> !isNaN(Number(d)));
    this.nom = route.snapshot.paramMap.get("nom");
    this.reference = route.snapshot.paramMap.get("reference");
    this.marque = route.snapshot.paramMap.get("marque");
    this.discipline = route.snapshot.paramMap.get("discipline");

  }

  submit() {
    this._prodService.rechercherProduit(this.nom, this.reference, this.marque, this.discipline, this.prixMin, this.prixMax, this.sort).subscribe((produitData) => this.produits = produitData);
  }

  ngOnInit() {

  }

}
