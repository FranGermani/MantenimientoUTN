import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  showHeaderButtons: boolean = true;

  constructor(private router: Router) {
    // Suscribirse a los cambios de ruta
    this.router.events.subscribe(() => {
      this.showHeaderButtons = this.router.url !== '/register'; // Cambiar según la ruta actual
    });
  }
}
