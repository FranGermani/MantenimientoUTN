/*import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { UsersService } from '../services/usuario.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private usersService: UsersService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const isAuthenticated = this.usersService.isAuthenticated();


    if (state.url === '/login' || state.url === '/register') {
      if (isAuthenticated) {
        this.router.navigate(['/user']);
        return false;
      }
      return true;
    }


    if (!isAuthenticated) {
      this.router.navigate(['/login']); 
      return false;
    }

    return true; 
  }
}
*/