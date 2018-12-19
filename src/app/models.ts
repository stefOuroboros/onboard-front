export class Produit {
  reference: string;
  nom: string;
  prix: number;
  photos: string[];
  quantite: number;
  description: string;
  marque: Marque;
  discipline: Discipline;
  longueur: number;
  largeur: number;
  poids: number;
  empatement: number;
  largeurRoues: number;
  actif: boolean;


  constructor(params: any) {
    Object.assign(this, params);
  }
}

export class ProduitFromJson {
  reference: string;
  nom: string;
  prix: number;
  photos: string[];
  quantite: number;
  marque: Marque;
  discipline: Discipline;
  longueur: number;
  largeur: number;
  poids: number;
  empatement: number;
  largeurRoues: number;
  actif: boolean;


  // tslint:disable-next-line:max-line-length
  constructor(reference: string, nom: string, prix: number, photos: string[], quantite: number, marque: Marque, discipline: Discipline, longueur: number,
    largeur: number,
    poids: number,
    empatement: number,
    largeurRoues: number,
    actif: boolean, ) {
    this.reference = reference;
    this.nom = nom;
    this.prix = prix;
    this.photos = photos;
    this.quantite = quantite;
    this.marque = marque;
    this.discipline = discipline;
    this.longueur = longueur;
    this.largeur = largeur;
    this.poids = poids;
    this.empatement = empatement;
    this.largeurRoues = largeurRoues;
    this.actif = actif;
  }
}

export enum Marque {

  LOADED = 1,
  MAJUTSUS = 2,
  LANDYATCHZ = 3,
  MOONSHINE = 4,
  CARVER = 5,
  LUCALONGBOARD = 6
}

export enum Discipline {
  DANCING = 1,
  CRUISING = 2,
  DOWNHILL = 3,
  FREESTYLE = 4
}
