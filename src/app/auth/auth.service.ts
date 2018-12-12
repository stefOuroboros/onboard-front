import { Injectable } from '@angular/core';
import {Utilisateur} from './auth.domains';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Observable} from 'rxjs/internal/Observable';
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject';
import {Subject, of} from 'rxjs';
import {catchError, map, tap} from 'rxjs/operators';

/**
 * Collègue anonyme.
 *
 * @type {Utilisateur}
 */
const UTILISATEUR_ANONYME = new Utilisateur({});

/**
 * Service de gestion de l'authentification.
 */
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  /**
   * Flux du collègue connecté. Les abonnés sont notifiés dès qu'une connexion ou une déconnexion a lieu.
   *
   * A l'initialisation, le collègue connecté vaut 'undefined'.
   *
   * @type {BehaviorSubject<any>}
   */
  private utilisateurConnecteSub: BehaviorSubject<Utilisateur> = new BehaviorSubject(UTILISATEUR_ANONYME);

  constructor(private _http: HttpClient) {
  }

  /**
   * Interface Observable du collègue connecté.
   *
   * @returns {Observable<Utilisateur>}
   */
  get utilisateurConnecteObs(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.asObservable();
  }

  /**
   * Service permettant de vérifier si un utilisateur est authentifié.
   *
   * Une requête HTTP est déclenchée pour récupérer l'utilisateur connecté s'il n'est pas en cache.
   *
   * @returns {Observable<Utilisateur>}
   */
  verifierAuthentification(): Observable<Utilisateur> {
    return this.utilisateurConnecteSub.getValue().estAnonyme() ?
            this._http.get<Utilisateur>(`${environment.baseUrl}${environment.apiAuthMe}`, {withCredentials: true})
                  .pipe(
                    map(userServeur => new Utilisateur(userServeur)),
                    tap(user => this.utilisateurConnecteSub.next(user)),
                    catchError(err => of(UTILISATEUR_ANONYME))
                  ) :     of(this.utilisateurConnecteSub.getValue())
              ;
  }

  /**
   * Connexion de l'utilisateur.
   *
   * Le serveur provoque la création du cookie AUTH-TOKEN.
   *
   * @param {string} email : email de l'utilisateur
   * @param {string} mdp : mot de passe de l'utilisation
   * @returns {Observable<Utilisateur>}
   */
  connecter(email: string, mdp: string): Observable<Utilisateur> {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    // tslint:disable-next-line:max-line-length
    return this._http.post(`${environment.baseUrl}${environment.apiLogin}`, new HttpParams().set('username', email).set('password', mdp), config)
      .pipe(
        map(userServeur => new Utilisateur(userServeur)),
        tap(user => this.utilisateurConnecteSub.next(user) )
      );
  }

  /**
   * Déconnexion de l'utilisateur.
   *
   * Le serveur provoque la suppression du cookie AUTH-TOKEN.
   *
   * @returns {Observable<any>}
   */
  seDeconnecter() {

    const config = {
      headers: new HttpHeaders({
        'Content-Type': 'application/x-www-form-urlencoded'
      })
    };

    return this._http.post<Utilisateur>(`${environment.baseUrl}${environment.apiLogout}`, null , config)
      .pipe(
        tap(user => this.utilisateurConnecteSub.next(UTILISATEUR_ANONYME))
      );
  }
}
