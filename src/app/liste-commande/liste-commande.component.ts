import { Component, OnInit, Input } from '@angular/core';
import { Commande } from '../models';
import { CommandesServices } from '../services/commandes.service';

@Component({
  selector: 'app-liste-commande',
  templateUrl: './liste-commande.component.html',
  styleUrls: ['./liste-commande.component.css']
})
export class ListeCommandeComponent implements OnInit {

  @Input() commandes:Commande[] = null;

  constructor(private _commandesServices: CommandesServices) { }

  ngOnInit() {
    this._commandesServices.listerCommandes()
    .subscribe((commandeData) => this.commandes = commandeData);
  }

}
