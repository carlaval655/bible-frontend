import { NgModule } from '@angular/core';
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


@NgModule({
  declarations: [
    AppComponent,
    ConsultasListComponent,
    ConsultaDetailComponent,
    ConsultaSearchComponent,
    ConsultaDeleteComponent,
    ConsultaUpdateComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
  ],
  providers: [BibleService, BibleRepository],
  bootstrap: [AppComponent]
})
export class AppModule { }
