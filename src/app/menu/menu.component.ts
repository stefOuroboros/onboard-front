import { Component, OnInit, Input } from '@angular/core';
import { Utilisateur } from '../auth/auth.domains';
@Component({
  selector: 'app-menu',
  template: `
  <div *ngIf= "visiteur_courant.aLeRole("ROLE_ADMINISTRATEUR")">
    <nav>
      <ul>
        <li><a href = "">Gestion des produits</a></li>
        <li><a href = "">Commandes</a></li>
        <li><a href = "">Profil</a></li>
      </ul>
    </nav>
  </div>

  <div *ngIf= "visiteur_courant.aLeRole("ROLE_UTILISATEUR")">
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
  @Input() visiteur_courant:Utilisateur;
   
  constructor() { }

  ngOnInit() {
  }

}
