import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Utilisateur } from '../auth/auth.domains';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profil-utilisateur',
  templateUrl: './profil-utilisateur.component.html',
  styleUrls: ['./profil-utilisateur.component.css']
})
export class ProfilUtilisateurComponent implements OnInit {
  utilisateurConnecte: Observable<Utilisateur>;
  constructor(private _authSrv: AuthService, private _router: Router) {

   }

  ngOnInit() {
    this.utilisateurConnecte = this._authSrv.utilisateurConnecteObs;
  }

}
