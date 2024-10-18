import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  template: `
    <app-navbar></app-navbar>
    <div>
      <h1>Datos desde el *backend*:</h1>
      <pre>{{ data | json }}</pre>
    </div>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent implements OnInit {
  data: any;

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getData().subscribe((response) => {
      this.data = response;
    });
  }
}