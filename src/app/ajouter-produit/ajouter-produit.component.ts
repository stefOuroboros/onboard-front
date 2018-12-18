import { Component, OnInit, Input } from '@angular/core';
import { Marque, Discipline } from '../models';
import { Router } from '@angular/router';
import { ProduitsServices } from '../services/produits.service';

export class MonForm{
  reference:string;
  nom: string;
  prix:number;
  photos:string;
  quantite:number;
  longueur:number;
  largeur:number;
  poids:number;
  largeurRoues:number;
  empatement:number;
  marque:Marque;
  discipline:Discipline;
  description:string;
  actif:boolean;
}

@Component({
  selector: 'app-ajouter-produit',
  templateUrl: './ajouter-produit.component.html',
  styleUrls: ['./ajouter-produit.component.css']
})
export class AjouterProduitComponent implements OnInit {
  monForm:MonForm;
  keys: string[];
  keysDiscipline: string[];
  @Input() marques = Marque;
  @Input() disciplines = Discipline


  constructor(private _serv: ProduitsServices, private routerCol : Router) {
    this.monForm = new MonForm()
    this.keys = Object.keys(this.marques).filter(m=> !isNaN(Number(m)))
    this.keysDiscipline = Object.keys(this.disciplines).filter(d=> !isNaN(Number(d)))
    console.log(this.keys);
    
   }

   submit(){
     console.log(this.monForm.marque);
    this._serv.ajouterUnProduit(this.monForm.reference, this.monForm.nom,this.monForm.prix,this.monForm.photos,
      this.monForm.quantite,this.monForm.longueur,this.monForm.largeur,this.monForm.poids,this.monForm.largeurRoues,
      this.monForm.empatement,this.monForm.marque,this.monForm.discipline,this.monForm.description,this.monForm.actif);
   }

  ngOnInit() {
  }


}
