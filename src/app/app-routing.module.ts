import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultasListComponent } from './components/consultas-list/consultas-list.component';
import { ConsultaDetailComponent } from './components/consulta-detail/consulta-detail.component';
import { ConsultaSearchComponent } from './components/consulta-search/consulta-search.component';
import { ConsultaDeleteComponent } from './components/consulta-delete/consulta-delete.component';
import { ConsultaUpdateComponent } from './components/consulta-update/consulta-update.component';
import { AuthGuard } from './security/auth-guard.guard';
import { NoAutorizadoComponent } from './components/no-autorizado/no-autorizado.component';

const routes: Routes = [
  { path: '',component: ConsultasListComponent, canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'consultas', component: ConsultasListComponent, canActivate: [AuthGuard], data: { roles: ['admin'] }},
  { path: 'consulta/info', component: ConsultaDetailComponent,canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'consulta/create', component: ConsultaSearchComponent,canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'consulta/delete', component: ConsultaDeleteComponent,canActivate: [AuthGuard], data: { roles: ['admin'] } },
  { path: 'consulta/update', component: ConsultaUpdateComponent,canActivate: [AuthGuard], data: { roles: ['admin'] } },
  {path: 'NoAutorizado', component: NoAutorizadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
