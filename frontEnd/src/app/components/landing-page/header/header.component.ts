import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { UsersService } from '../../../services/usuario.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  showHeaderButtons: boolean = true;
  currentUser: string | null = null;

  constructor(private router: Router, private usersService: UsersService) {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showHeaderButtons = !this.isRestrictedRoute(event.url);
      });
  }

  ngOnInit(): void {
    this.usersService.getCurrentUser().subscribe(user => {
      this.currentUser = user;
    });
  }

  isRestrictedRoute(url: string): boolean {
    return url === '/register' || url.startsWith('/panel');
  }

  goToHome(): void {
    const isAuthenticated = this.usersService.isAuthenticated();
    const userRole = this.usersService.getUserRole();

    if (isAuthenticated) {
      if (userRole === 'admin') {
        this.router.navigate(['/adminTutorial']);
      } else if (userRole === 'user') {
        this.router.navigate(['/user']);
      }
    } else {
      this.router.navigate(['/']);
    }
  }
}
