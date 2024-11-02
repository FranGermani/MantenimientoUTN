import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { UsersService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.usersService.isAuthenticated();
    const userRole = this.usersService.getUserRole();

    // Si el usuario NO está autenticado, redirige a /login
    if (!isAuthenticated) { 
      if (state.url !== '/login') {
        this.router.navigate(['/login']);
      }
      return false; // Bloquea el acceso
    }

    // Si el usuario está autenticado, verifica el rol y redirige si no coincide con la ruta
    if (userRole === 'admin' && state.url.startsWith('/user')) {
      this.router.navigate(['/adminTutorial']);
      return false;
    } else if (userRole === 'user' && state.url.startsWith('/adminTutorial')) {
      this.router.navigate(['/user']);
      return false;
    }

    return true; // Permite el acceso si el rol coincide con la ruta o no hay redirección
  }
}