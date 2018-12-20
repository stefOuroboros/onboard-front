import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../auth/auth.domains';
import { Observable } from 'rxjs/internal/Observable';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() obs_visiteur_courant:Observable<Utilisateur>;
  utilisateurConnecte: Observable<Utilisateur>;
  visiteur_courant:Utilisateur;
  constructor(private _authSrv: AuthService, private _router: Router) {
    this.visiteur_courant = new Utilisateur({nom: "", prenom: "", email: "", motDePasse:"", roles: []});
  }

  seDeconnecter() {
    this.utilisateurConnecte = this._authSrv.utilisateurConnecteObs;
    this._authSrv.seDeconnecter().subscribe(
      value => this._router.navigate(['/accueil'])
    );
  }

  ngOnInit() {
    this.utilisateurConnecte = this._authSrv.utilisateurConnecteObs;
    this.obs_visiteur_courant.subscribe(utilisateur => this.visiteur_courant=utilisateur);
  }

}
