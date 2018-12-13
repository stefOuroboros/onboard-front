export class Produit {
  reference: string;
  nom: string;
  prix: number;
  photos: string[];
  quantite: number;
  caracteristiques: Caracteristiques;
  description: string;
  marques: Marques;
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
  marques: Marques;
  discipline: Discipline;
  flex: number[];

  // tslint:disable-next-line:max-line-length
  constructor(reference: string, nom: string, prix: number, photos: string[], quantite: number, caracteristiques: Caracteristiques, marques: Marques, discipline: Discipline, flex: number[]) {
    this.reference = reference;
    this.nom = nom;
    this.prix = prix;
    this.photos = photos;
    this.quantite = quantite;
    this.caracteristiques = caracteristiques;
    this.marques = marques;
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

 export enum Marques {
   Unset = 0,
  LOADED = 1,
  MAJUSTUS = 2,
  LANDYATCHZ = 3,
  MOONSHINE = 4,
  CARVER = 5,
  LUCALONGBOARD = 6
}

 export enum Discipline {
   Unset = 0,
  DANCING = 1,
  CRUISING = 2,
  DOWNHILL = 3,
  FREESTYLE = 4
 }
