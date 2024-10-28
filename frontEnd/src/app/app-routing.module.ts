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
import { UserOTComponent } from '@components/user/user-OT/user-ot/user-ot.component';
import { UserTAComponent } from '@components/user/user-TA/user-ta/user-ta.component';
import { UserTTComponent } from '@components/user/user-TT/user-tt/user-tt.component';
import { Err404Component } from '@components/err404/err404.component';

// Definición de rutas
const routes: Routes = [
  { path: '', component: LandingBodyComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: BodyComponent },
  { path: 'user', component: UserPanelTutorial, children: [
      { path: 'userTA', component: UserTAComponent },
      { path: 'userTT', component: UserTTComponent },
      { path: 'userOT', component: UserOTComponent }
    ] 
  },
  { 
    path: 'adminTutorial', 
    component: TutorialComponent,
    children: [ 
      { path: '', component: PanelComponent },
      { path: 'ordenTrabajo', component: OrdenTrabajoComponent },
      { path: 'activos', component: ActivosFromComponent }, 
      { path: 'reporte', component: ReporteComponent },
    ]
  },
  { path: 'camara', component: CameraComponent },
  { path: '**', component: Err404Component }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
