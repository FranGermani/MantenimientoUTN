import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/auth/body/body.component'; 
import { RegisterComponent } from './components/auth/register/register.component'; 
import { PanelComponent } from './components/admin-panel/panel/panel.component'; 
import { OrdenTrabajoComponent } from '@components/ordenTrabajo/orden-trabajo/orden-trabajo.component';
import { ReporteComponent } from '@components/ordenTrabajo/reporte/reporte.component';
import { ActivosFromComponent } from '@components/admin-panel/activos-from/activos-from.component';
import { LandingBodyComponent } from '@components/landing-page/landing-body/landing-body.component';
import { CameraComponent } from '@components/camera/camera.component';

// Definición de rutas
const routes: Routes = [
  { path: '', component: LandingBodyComponent }, // Ruta raíz que carga BodyComponent
  { path: 'register', component: RegisterComponent }, // Ruta para el registro
  { path: 'login', component: BodyComponent },
  { 
    path: 'panel', 
    component: PanelComponent,
    children: [ // Rutas hijas del PanelComponent
      { path: 'ordenTrabajo', component: OrdenTrabajoComponent },
      { path: 'reporte', component: ReporteComponent },
      { path: 'activos', component: ActivosFromComponent },
      { path: '', redirectTo: 'ordenTrabajo', pathMatch: 'full' }, // Redirige a 'ordenTrabajo' por defecto
    ]
  },
  { path: 'camara', component: CameraComponent },
];

// Importación y exportación del módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
