import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  showHeaderButtons: boolean = true;
  data: any;

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.showHeaderButtons = this.router.url !== '/register';
    });
  }

  ngOnInit() {
  }
}
