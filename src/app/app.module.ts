import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { FormsModule } from '@angular/forms';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProduitDetailComponent } from './produit-detail/produit-detail.component';
import { ProduitsServices } from './services/produits.service';


const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // /tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'accueil', component: ListeProduitsComponent },
  { path: '', redirectTo: '/tech', pathMatch: 'full' },

];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    ListeProduitsComponent,
    ProduitDetailComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  },
  {
    provide: ProduitsServices,
    useClass: ProduitsServices,
    multi: true
  }
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
