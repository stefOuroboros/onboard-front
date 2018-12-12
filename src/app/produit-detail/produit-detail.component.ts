import { Component, OnInit } from '@angular/core';
import { Marques, Produit } from '../models';

@Component({
  selector: 'app-produit-detail',
  templateUrl: './produit-detail.component.html',
  styleUrls: ['./produit-detail.component.css']
})
export class ProduitDetailComponent implements OnInit {
marques:Marques[]=[
  0,1,2,3,4,5
];
  constructor() { }

  ngOnInit() {
  }

}
