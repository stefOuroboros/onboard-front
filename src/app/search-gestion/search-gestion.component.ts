import { Component, OnInit } from '@angular/core';
import { AsConfigService } from 'ngx-advanced-searchbox';
import { HttpClient } from '@angular/common/http';
import { ProduitsServices } from '../services/produits.service';
import { Produit } from '../models';

@Component({
  selector: 'app-search-gestion',
  templateUrl: './search-gestion.component.html',
  styleUrls: ['./search-gestion.component.css']
})
export class SearchGestionComponent implements OnInit {

  public model = {};
  public template = {};

  constructor(_config: AsConfigService, _http: HttpClient, public service: ProduitsServices) {
    this.template = [
      {
        'model': 'discipline',
        'type': 'INPUT',
        'domains': 'domains',
        'multiple': '4',
        'bindLabel': 'label',
        'label': 'discipline'
      },

          _config.customDomainsAsyncFn['discipline'] = (observable, viewModel, produit: Produit) => {
        return observable
          .switchMap((term) => {
            return this.service.listerProduits
              .map((response: any) => {
                let newResponse = { response: response, term: term };
                return newResponse;
              });
          }
          );
      }
    ];
  }

  ngOnInit() {
  }

}