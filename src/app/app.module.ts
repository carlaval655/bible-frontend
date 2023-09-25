import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ConsultasListComponent } from './components/consultas-list/consultas-list.component';
import { ConsultaDetailComponent } from './components/consulta-detail/consulta-detail.component';
import { ConsultaSearchComponent } from './components/consulta-search/consulta-search.component';
import { ConsultaDeleteComponent } from './components/consulta-delete/consulta-delete.component';
import { ConsultaUpdateComponent } from './components/consulta-update/consulta-update.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { BibleService } from './services/bible.service';
import { BibleRepository } from './services/bible.repository';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule} from '@angular/material/paginator';
import { APP_INITIALIZER, NgModule } from '@angular/core';
import { KeycloakAngularModule, KeycloakAuthGuard, KeycloakService } from 'keycloak-angular';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { NoAutorizadoComponent } from './components/no-autorizado/no-autorizado.component';


import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
function initializeKeycloak(keycloak: KeycloakService) {
  return () =>
    keycloak.init({
      config: {
        url: 'http://localhost:8080',
        realm: 'prueba_arquitectura',
        clientId: 'bible-client'
      },
      initOptions: {
        onLoad: 'check-sso',
        silentCheckSsoRedirectUri:
          window.location.origin + '/assets/silent-check-sso.html'
      }
    });
}

@NgModule({
  declarations: [
    AppComponent,
    ConsultasListComponent,
    ConsultaDetailComponent,
    ConsultaSearchComponent,
    ConsultaDeleteComponent,
    ConsultaUpdateComponent,
    NavbarComponent,
    NoAutorizadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    KeycloakAngularModule,
    MatInputModule,
    MatButtonModule
  ],
  providers: [BibleService, BibleRepository,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeKeycloak,
      multi: true,
      deps: [KeycloakService]
    }
],
  bootstrap: [AppComponent]
})
export class AppModule { }
