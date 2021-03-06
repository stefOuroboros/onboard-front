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
import { DetailProduitComponent } from './detail-produit/detail-produit.component';
import { ModifierProduitComponent } from './modifier-produit/modifier-produit.component';
import { PassageInfoService } from './passage-info.service';
import { PanierComponent } from './panier/panier.component';
import { PanierService } from './services/panier.service';
import { AjouterClientComponent } from './ajouter-client/ajouter-client.component';
import { ProfilUtilisateurComponent } from './profil-utilisateur/profil-utilisateur.component';




const routes: Routes = [
  { path: 'tech', component: TechComponent, canActivate: [StatutConnecteService] }, // tech accessible uniquement si connecté
  { path: 'auth', component: AuthComponent },
  { path: 'accueil', component: AccueilComponent },
  { path: 'commandes', component: ListeCommandeComponent, canActivate: [StatutConnecteService] },
  { path: 'produits/:nom', component: DetailProduitComponent },
  { path: 'profil', component: ProfilUtilisateurComponent },
  { path: 'gestion', component: GestionProduitComponent, canActivate: [StatutConnecteService] },
  { path: 'new', component: AjouterProduitComponent, canActivate: [StatutConnecteService] },
  { path: 'store', redirectTo:'/accueil', pathMatch: 'full'},
  { path: 'modifier', component: ModifierProduitComponent, canActivate: [StatutConnecteService]},
  { path: 'panier', component:PanierComponent},
  { path: 'signin', component: AjouterClientComponent},
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
    ListeCommandeComponent,
    ModifierProduitComponent,
    DetailProduitComponent,
    PanierComponent,
    AjouterClientComponent,
    ProfilUtilisateurComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    FormsModule,
  ],
  providers: [ProduitsServices, PassageInfoService, CommandesServices, PanierService, {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptorService,
    multi: true
  }],

  bootstrap: [AppComponent]
})
export class AppModule { }
