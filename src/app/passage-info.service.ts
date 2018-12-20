import { Injectable } from '@angular/core';
import { Produit } from './models';
import { ProduitsServices } from './services/produits.service';
import { Observable } from 'rxjs/internal/Observable';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Injectable({
  providedIn: 'root'
})
export class PassageInfoService {

  private dataSource : BehaviorSubject<Produit[]> = new BehaviorSubject([]);
  data = this.dataSource.asObservable();

  constructor(private _produitsService: ProduitsServices) {
    this._produitsService.listerProduits().subscribe(data => this.dataSource.next(data));
  }

  getProduits(){
    return this.data;
  }
  rafraichir(produits: Produit[])
  {
    this.dataSource.next(produits)
  }
}
