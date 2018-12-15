import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-gestion-produit',
  templateUrl: './gestion-produit.component.html',
  styleUrls: ['./gestion-produit.component.css']
})
export class GestionProduitComponent implements OnInit {

  obs_visiteur_courant: Observable<Utilisateur>;
  visiteur_courant: Utilisateur;
  constructor(private _authService: AuthService) {
    this.visiteur_courant = new Utilisateur({ nom: "", prenom: "", email: "", motDePasse: "", roles: [] });
  }

  ngOnInit() {
    this._authService.verifierAuthentification().subscribe(visit => this.visiteur_courant = visit);
  }

}
