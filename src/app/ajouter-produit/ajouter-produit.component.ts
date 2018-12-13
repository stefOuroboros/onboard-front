import { Component, OnInit } from '@angular/core';
import { Marques, Discipline } from '../models';
import { Router } from '@angular/router';
import { ProduitsServices } from '../services/produits.service';

export class MonForm{
  reference:string;
  nom: string;
  prix:number;
  photos:string;
  quantite:number;

  marques=Marques;

//recuperation de discipline
  disciplines=Discipline;


  flex:number;
}

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  monForm:MonForm = new MonForm();
  keysMarque: string[];
  keysDiscipline: string[];
  
  constructor(private _serv: ProduitsServices, private routerCol : Router) {
    this.keysMarque = Object.keys(this.monForm.marques).filter(f=> !isNaN(Number(f)))
    this.keysDiscipline = Object.keys(this.monForm.disciplines).filter(f=> !isNaN(Number(f)))
   }

  ngOnInit() {
  }

}
