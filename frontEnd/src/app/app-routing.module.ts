import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'; //Asegúrate de que la ruta es correcta
import { BodyComponent } from './components/landing-page/body/body.component';
import { RegisterComponent } from './components/landing-page/register/register.component';

const routes: Routes = [
  { path: '', component: BodyComponent},
  { path: 'register', component: RegisterComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
