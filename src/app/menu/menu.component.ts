import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../auth/auth.domains';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-menu',
  template: `
  <div *ngIf= "visiteur_courant.aLeRole('ROLE_ADMINISTRATEUR')">
    <nav>
      <ul>
        <li><a href = "">Gestion des produits</a></li>
        <li><a href = "">Commandes</a></li>
        <li><a href = "">Profil</a></li>
      </ul>
    </nav>
  </div>

  <div *ngIf= "visiteur_courant.aLeRole('ROLE_UTILISATEUR')">
    <nav>
      <ul>
        <li><a href = "">Mon menu</a></li>
      </ul>
    </nav>
  </div>

  <div *ngIf= "visiteur_courant.estAnonyme()">
  <nav>
    <ul>
      <li><a href = "">Mon menu</a></li>
    </ul>
  </nav>
</div>
  `,
  styles: []
})
export class MenuComponent implements OnInit {
  @Input() obs_visiteur_courant:Observable<Utilisateur>;
  visiteur_courant:Utilisateur;
  constructor() { 
    this.visiteur_courant = new Utilisateur({nom: "", prenom: "", email: "", motDePasse:"", roles: []});
  }

  ngOnInit() {
    console.log("Début");
    console.log(this.visiteur_courant);
    this.obs_visiteur_courant.subscribe(utilisateur => this.visiteur_courant=utilisateur);
    console.log("Fin");
  }

}
