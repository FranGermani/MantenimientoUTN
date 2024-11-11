import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-err404',
  templateUrl: './err404.component.html',
  styleUrls: ['./err404.component.css']
})
export class Err404Component {

  constructor(private router: Router) {}

  goHome(): void {
    this.router.navigate(['/']);
  }
}
