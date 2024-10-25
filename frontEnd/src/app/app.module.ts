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
import { ActivosFromComponent } from './components/admin-panel/activos-from/activos-from.component';
import { LandingBodyComponent } from './components/landing-page/landing-body/landing-body.component';
import { CameraComponent } from './components/camera/camera.component';
import { UserPanelTutorial } from './components/user/user-tutorial/user-tutorial.component';
import { TutorialComponent } from './components/admin-panel/tutorial/tutorial.component';
import { OrdenTrabajoTablaComponent } from './orden-trabajo-tabla/orden-trabajo-tabla.component';
import { EdificioFormComponent } from './components/admin-panel/edificio-form/edificio-form.component';
import { EdificioService } from './services/edificio.service';

  
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
    ActivosFromComponent,
    LandingBodyComponent,
    CameraComponent,
    UserPanelTutorial,
    TutorialComponent,
    OrdenTrabajoTablaComponent,
    EdificioFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule 
  ],
  providers: [
    provideHttpClient(), // Asegúrate de que esto esté aquí
    EdificioService, // Asegúrate de que el servicio esté incluido aquí
  ],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
