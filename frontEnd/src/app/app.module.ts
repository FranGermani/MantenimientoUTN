import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { HeaderComponent } from './components/landing-page/header/header.component';
import { BodyComponent } from './components/landing-page/body/body.component';
import { FooterComponent } from './components/landing-page/footer/footer.component';
import { RegisterComponent } from './components/landing-page/register/register.component';
import { PanelComponent } from './components/panel/panel/panel.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
  
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent,
    RegisterComponent,
    PanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [provideHttpClient()],
  bootstrap: [AppComponent],
  
})
export class AppModule {}
