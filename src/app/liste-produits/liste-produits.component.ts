import { Component, OnInit, Input } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { PanierService } from '../services/panier.service';
import { Produit } from '../models';
import { Observable } from 'rxjs';
import { Utilisateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { PassageInfoService } from '../passage-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-liste-produits',
  templateUrl:'./liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  produits: Produit[] = null;
  @Input() obs_visiteur_courant:Observable<Utilisateur>;
  visiteur_courant: Utilisateur;

  constructor(private _produitsServices: ProduitsServices, private _router: Router, private _authService: AuthService, private _panierService: PanierService, private _passageInfoService: PassageInfoService) {
    this.visiteur_courant = new Utilisateur({nom: "", prenom: "", email: "", motDePasse:"", roles: []});

  }

  ngOnInit() {
    this._authService.verifierAuthentification().subscribe(visit => this.visiteur_courant = visit);
    this._passageInfoService.getProduits().subscribe(data => this.produits=data);
  }

  delete(produitASupprimer:Produit){
    this.produits.splice(this.produits.findIndex(p => p === produitASupprimer),1)
    this._produitsServices.deleteUnProduit(produitASupprimer.reference).subscribe()
  }

  modify(produitAModifier:Produit){
    sessionStorage.setItem("selectedProduit", JSON.stringify(produitAModifier));
    this._router.navigate(['modifier']);
  }

  ajouterAuPanier(prod:Produit){
    this._panierService.ajouterArticle(1,prod);
  }
}
