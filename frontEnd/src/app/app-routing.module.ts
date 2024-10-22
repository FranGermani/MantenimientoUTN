import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './components/landing-page/body/body.component'; 
import { RegisterComponent } from './components/landing-page/register/register.component'; 
import { PanelComponent } from './components/panel/panel/panel.component'; 

const routes: Routes = [
  { path: '', component: BodyComponent }, 
  { path: 'register', component: RegisterComponent }, 
  { path: 'panel', component: PanelComponent }, 
];
//agregar children ver doc. herrera fernando youtuber
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
