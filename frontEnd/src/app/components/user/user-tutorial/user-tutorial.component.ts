import { Component } from '@angular/core';

@Component({
  selector: 'app-user-tutorial',
  templateUrl: './user-tutorial.component.html',
  styleUrls: ['./user-tutorial.component.css'] // Corregido aquí
})
export class UserPanelTutorial {
  currentView: string = 'presentacion'; // Cambiado a 'presentacion' para mostrar la sección de bienvenida por defecto
  
  // Método para cambiar la vista
  setView(view: string) {
    this.currentView = view;
  }
}


