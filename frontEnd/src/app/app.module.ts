import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { BodyComponent } from './components/auth/body/body.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { RegisterComponent } from './components/auth/register/register.component';
import { PanelComponent } from './components/admin-panel/panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { OrdenTrabajoComponent } from './components/ordenTrabajo/orden-trabajo/orden-trabajo.component';
import { ReporteComponent } from './components/ordenTrabajo/reporte/reporte.component';
import {  ActivosFromComponent } from './components/admin-panel/activos-from/activos-from.component';
import { LandingBodyComponent } from './components/landing-page/landing-body/landing-body.component';
import { CameraComponent } from './components/camera/camera.component';
import { UserPanelTutorial } from './components/user/user-tutorial/user-tutorial.component';
import { TutorialComponent } from './components/admin-panel/tutorial/tutorial.component';
import { EdificioFormComponent } from './components/admin-panel/edificio-form/edificio-form.component';
import { EdificioService } from './services/edificio.service';
import { UserOtComponent } from './components/user/user-OT/user-ot/user-ot.component';
import { UserTTComponent } from './components/user/user-TT/user-tt/user-tt.component';
import { UserTAComponent } from './components/user/user-TA/user-ta/user-ta.component';
import { Err404Component } from './components/err404/err404.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { OrdenGeneradaDialogComponent } from './components/ordenTrabajo/orden-trabajo/orden-generada-dialog/orden-generada-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BorrarOrdenDialogComponent } from './components/admin-panel/panel/borrar-orden-dialog/borrar-orden-dialog.component';
import { OrdenDetalleDialogComponent } from './components/admin-panel/panel/orden-detalle-dialog/orden-detalle-dialog.component'; 
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RegisterComponent,
    PanelComponent,
    OrdenTrabajoComponent,
    ReporteComponent,
    LandingBodyComponent,
    CameraComponent,
    UserPanelTutorial,
    TutorialComponent,
    EdificioFormComponent,
    UserOtComponent,
    UserTTComponent,
    UserTAComponent,
    Err404Component,
    ActivosFromComponent,
    OrdenGeneradaDialogComponent,
    BorrarOrdenDialogComponent,
    OrdenDetalleDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatDialogModule  
  ],
  providers: [
    provideHttpClient(),
    EdificioService,
    provideAnimationsAsync(),
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
