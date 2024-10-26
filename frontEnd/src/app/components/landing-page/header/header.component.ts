import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  showHeaderButtons: boolean = true;

  constructor(private router: Router) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showHeaderButtons = !this.isRestrictedRoute(event.url);
      });
  }

  isRestrictedRoute(url: string): boolean {
    return url === '/register' || url.startsWith('/panel');
  }

  navigateToRegister() {
    this.router.navigate(['/register']);
  }
}
