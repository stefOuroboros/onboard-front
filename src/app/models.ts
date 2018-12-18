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
  longueur: number;
  largeur: number;
  poids: number;
  empatement: number;
  largeurRoues: number;


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
 
  constructor(params: any) {
    Object.assign(this, params);
  }
}

 export enum Marque {

  LOADED = 1,
  MAJUSTUS = 2,
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
