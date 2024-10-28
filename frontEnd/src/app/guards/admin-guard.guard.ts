/*import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UsersService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(): boolean {
    const isAuthenticated = this.usersService.isAuthenticated();
    const userRole = this.usersService.getUserRole();

    // Verifica que el usuario esté autenticado y tenga rol de "admin"
    if (isAuthenticated && userRole === 'admin') {
      return true; // Permite el acceso
    }

    // Redirige al panel de usuario si es un usuario regular o al login si no está autenticado
    if (userRole === 'user') {
      this.router.navigate(['/user']);
    } else {
      this.router.navigate(['/login']);
    }
    
    return false; // Bloquea el acceso si no cumple los criterios
  }
}
*/