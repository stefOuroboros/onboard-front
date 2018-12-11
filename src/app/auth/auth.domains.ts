/**
 * Utilisateur de l'application.
 */
export class Utilisateur {
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  roles: string[];

  constructor(params: any) {
    Object.assign(this, params);
  }

  estAnonyme(): boolean {
    return this.email == undefined;
  }

}
