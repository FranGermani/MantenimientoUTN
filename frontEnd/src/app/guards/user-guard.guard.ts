import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class UserGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.usersService.isAuthenticated();
    const userRole = this.usersService.getUserRole();

    // Verifica que el usuario esté autenticado y tenga rol de "user"
    if (isAuthenticated && userRole === 'user') {
      return true; // Permite el acceso
    }

    // Redirige al panel de administrador si es un administrador o al login si no está autenticado
    if (userRole === 'admin') {
      this.router.navigate(['/adminTutorial']);
    } else {
      this.router.navigate(['/login']);
    }
    
    return false; // Bloquea el acceso si no cumple los criterios
  }
}

