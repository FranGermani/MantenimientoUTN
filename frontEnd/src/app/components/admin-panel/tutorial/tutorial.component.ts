import { Component } from '@angular/core';

@Component({
  selector: 'app-tutorial',
  templateUrl: './tutorial.component.html',
  styleUrl: './tutorial.component.css'
})
export class TutorialComponent {
  currentView: string = 'presentacion'; // Cambiado a 'presentacion' para mostrar la sección de bienvenida por defecto
  
  // Método para cambiar la vista
  setView(view: string) {
    this.currentView = view;
  }
}

