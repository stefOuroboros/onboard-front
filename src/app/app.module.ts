import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { TechComponent } from './tech/tech.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AuthComponent } from './auth/auth.component';
import { ListeProduitsComponent } from './liste-produits/liste-produits.component';
import { ProduitsServices } from './services/produits.service';
import { FormsModule } from '@angular/forms';
import { StatutConnecteService } from './auth/statut-connecte.service';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MenuComponent } from './menu/menu.component';
import { AccueilComponent } from './accueil/accueil.component';
import { AjouterProduitComponent } from './ajouter-produit/ajouter-produit.component';
import { GestionProduitComponent } from './gestion-produit/gestion-produit.component';
import { SearchGestionComponent } from './search-gestion/search-gestion.component';
import { ListeCommandeComponent } from './liste-commande/liste-commande.component';
import { CommandesServices } from './services/commandes.service';



const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'commandes', component: ListeCommandeComponent, canActivate: [StatutConnecteService] },
  { path: 'gestion', component: GestionProduitComponent, canActivate: [StatutConnecteService] },
  { path: 'new', component: AjouterProduitComponent, canActivate: [StatutConnecteService] },
  { path: 'store', redirectTo:'/accueil', pathMatch: 'full'},
  { path: '', redirectTo: '/accueil', pathMatch: 'full' }

];


@NgModule({
  declarations: [
    AppComponent,
    TechComponent,
    AuthComponent,
    MenuComponent,
    ListeProduitsComponent,
    MenuComponent,
    AccueilComponent,
    AjouterProduitComponent,
    GestionProduitComponent,
    SearchGestionComponent,
    ListeCommandeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [ProduitsServices, CommandesServices, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
