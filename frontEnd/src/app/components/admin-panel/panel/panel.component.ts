import { Component } from '@angular/core';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'] // Corregido: styleUrls en plural
})
export class PanelComponent {
  currentView: string = 'ordenes'; // Por defecto, mostrar la tabla de órdenes

  // Método para cambiar la vista
  setView(view: string) {
    this.currentView = view;
  }
}
