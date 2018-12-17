export class Produit {
  reference: string;
  nom: string;
  prix: number;
  photos: string[];
  quantite: number;
  caracteristiques: Caracteristiques;
  description: string;
  marque: Marque;
  discipline: Discipline;
  flex: number[];

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
  caracteristiques: Caracteristiques;
  marque: Marque;
  discipline: Discipline;
  flex: number[];

  // tslint:disable-next-line:max-line-length
  constructor(reference: string, nom: string, prix: number, photos: string[], quantite: number, caracteristiques: Caracteristiques, marque: Marque, discipline: Discipline, flex: number[]) {
    this.reference = reference;
    this.nom = nom;
    this.prix = prix;
    this.photos = photos;
    this.quantite = quantite;
    this.caracteristiques = caracteristiques;
    this.marque = marque;
    this.discipline = discipline;
    this.flex = flex;
  }
}


export class Caracteristiques {
  longueur: number;
  largeur: number;
  poids: number;
  empatement: number[];
  largeurRoues: number[];
  constructor(params: any) {
    Object.assign(this, params);
  }
}

 export enum Marque {

  LOADED = 0,
  MAJUSTUS = 1,
  LANDYATCHZ = 2,
  MOONSHINE = 3,
  CARVER = 4,
  LUCALONGBOARD = 5
}

 export enum Discipline {
  DANCING = 0,
  CRUISING = 1,
  DOWNHILL = 2,
  FREESTYLE = 3
 }
