import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/landing-page/body/body.component'; 
import { RegisterComponent } from './components/landing-page/register/register.component'; 
import { PanelComponent } from './components/panel/panel/panel.component'; 
import { OrdenTrabajoComponent } from '@components/ordenTrabajo/orden-trabajo/orden-trabajo.component';
import { ReporteComponent } from '@components/ordenTrabajo/reporte/reporte.component';
import { ActivosFromComponent } from '@components/activos-from/activos-from.component';

const routes: Routes = [
  { path: '', component: BodyComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'panel', component: PanelComponent }, 
  { path: 'ordenTrabajo', component: OrdenTrabajoComponent },
  { path: 'reporte', component: ReporteComponent }, 
  { path: 'activos', component: ActivosFromComponent }, 
];
//agregar children ver doc. herrera fernando youtuber
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
