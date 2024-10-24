import { Component } from '@angular/core';

@Component({
  selector: 'app-user-panel',
  templateUrl: './user-panel.component.html',
  styleUrls: ['./user-panel.component.css'] // Corregido aquí
})
export class UserPanelComponent {
  currentView: string = 'presentacion'; // Cambiado a 'presentacion' para mostrar la sección de bienvenida por defecto
  
  // Método para cambiar la vista
  setView(view: string) {
    this.currentView = view;
  }
}


