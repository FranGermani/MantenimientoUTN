import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  template: `
    <nav>
      <ul>
        <li><a routerLink="/home">Home</a></li>
        <li><a routerLink="/about">About</a></li>
        <li><a routerLink="/contact">Contact</a></li>
      </ul>
    </nav>
  `,
})
export class NavbarComponent {}
