import { Component, OnInit, Input } from '@angular/core';
import { ProduitsServices } from '../services/produits.service';
import { Produit } from '../models';
import { Observable } from 'rxjs';
import { Utilisateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-liste-produits',
  templateUrl:'./liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {

  @Input() produits: Produit[] = null;
  @Input() obs_visiteur_courant:Observable<Utilisateur>;
  visiteur_courant: Utilisateur;

  constructor(private _produitsServices: ProduitsServices, private _authService: AuthService) {
    this.visiteur_courant = new Utilisateur({nom: "", prenom: "", email: "", motDePasse:"", roles: []});
  }

  ngOnInit() {
    this._authService.verifierAuthentification().subscribe(visit => this.visiteur_courant = visit);
    this._produitsServices.listerProduits()
    .subscribe((produitData) => this.produits = produitData);
  }

  delete(produitASupprimer:Produit){
    this.produits.splice(this.produits.findIndex(p => p === produitASupprimer),1)
    this._produitsServices.deleteUnProduit(produitASupprimer.reference).subscribe()
  }


  modifier(produitAModifier:Produit){
    sessionStorage.setItem("selectedProduit", JSON.stringify(produitAModifier));
  }
}
