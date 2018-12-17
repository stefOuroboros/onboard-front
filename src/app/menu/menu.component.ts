import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../auth/auth.domains';
import { Observable } from 'rxjs/internal/Observable';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  @Input() obs_visiteur_courant:Observable<Utilisateur>;
  visiteur_courant:Utilisateur;
  constructor() {
    this.visiteur_courant = new Utilisateur({nom: "", prenom: "", email: "", motDePasse:"", roles: []});
  }

  ngOnInit() {
    this.obs_visiteur_courant.subscribe(utilisateur => this.visiteur_courant=utilisateur);
  }

}
