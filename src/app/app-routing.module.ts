import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultasListComponent } from './components/consultas-list/consultas-list.component';
import { ConsultaDetailComponent } from './components/consulta-detail/consulta-detail.component';
import { ConsultaSearchComponent } from './components/consulta-search/consulta-search.component';
import { ConsultaDeleteComponent } from './components/consulta-delete/consulta-delete.component';
import { ConsultaUpdateComponent } from './components/consulta-update/consulta-update.component';

const routes: Routes = [
  { path: '', redirectTo: '/consultas', pathMatch: 'full' },
  { path: 'consultas', component: ConsultasListComponent },
  { path: 'consulta/info', component: ConsultaDetailComponent },
  { path: 'consulta/create', component: ConsultaSearchComponent },
  { path: 'consulta/delete', component: ConsultaDeleteComponent },
  { path: 'consulta/update', component: ConsultaUpdateComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }