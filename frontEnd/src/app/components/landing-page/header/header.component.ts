import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHeaderButtons: boolean = true; // Propiedad para controlar la visibilidad de los botones

  constructor(private router: Router) {
    // Escuchar los cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        // Mostrar u ocultar los botones según la ruta
        this.showHeaderButtons = !this.isRestrictedRoute(event.url); // Ocultar en rutas restringidas
      });
  }

  isRestrictedRoute(url: string): boolean {
    // Especifica las rutas donde no quieres que aparezcan los botones
    return url === '/register' || url.startsWith('/panel');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
