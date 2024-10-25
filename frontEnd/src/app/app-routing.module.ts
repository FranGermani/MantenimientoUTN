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
import { UserPanelTutorial } from '@components/user/user-tutorial/user-tutorial.component';
import { TutorialComponent } from '@components/admin-panel/tutorial/tutorial.component';

// Definición de rutas
const routes: Routes = [
  { path: '', component: LandingBodyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: BodyComponent },
  {
    path: 'adminTutorial',
    component: TutorialComponent,
    children: [
      { path: '', component: PanelComponent }, // Asegúrate de tener esta ruta
      { path: 'ordenTrabajo', component: OrdenTrabajoComponent },
      { path: 'reporte', component: ReporteComponent },
      { path: 'activos', component: ActivosFromComponent },
    ],
  },
  { path: 'user', component: UserPanelTutorial },
  { path: 'camara', component: CameraComponent },
];

// Importación y exportación del módulo de enrutamiento
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
