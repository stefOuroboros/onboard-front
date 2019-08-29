import { Component, OnInit, Input } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { Router } from '@angular/router';
import { MonForm } from '../ajouter-produit/ajouter-produit.component';
import { Marque, Discipline, Produit } from '../models';

@Component({
  selector: 'app-modifier-produit',
  templateUrl: './modifier-produit.component.html',
  styleUrls: ['./modifier-produit.component.css']
})
export class ModifierProduitComponent implements OnInit {

  monForm:MonForm;
  keys: string[];
  keysDiscipline: string[];
  produit: Produit;
  @Input() marques = Marque;
  @Input() disciplines = Discipline


  constructor(private _serv: ProduitsServices, private routerCol : Router) {
    this.monForm = new MonForm()
    this.keys = Object.keys(this.marques).filter(m=> !isNaN(Number(m)))
    this.keysDiscipline = Object.keys(this.disciplines).filter(d=> !isNaN(Number(d)))
    console.log(this.keys);
    
   }

  ngOnInit() {
    this.produit=JSON.parse(sessionStorage.getItem("selectedProduit"));
  }

  submit(){
   this._serv.modifierUnProduit(this.produit);
   this.routerCol.navigate(['modifier']);
  }

}
