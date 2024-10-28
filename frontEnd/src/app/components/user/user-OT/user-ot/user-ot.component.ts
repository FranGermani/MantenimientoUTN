import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../../services/orden-trabajo.service';

@Component({
  selector: 'app-user-ot',
  templateUrl: './user-ot.component.html',
  styleUrls: ['./user-ot.component.css']
})
export class UserOtComponent implements OnInit {
  ordenes: any[] = [];

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.ordenTrabajoService.getOrdenesTrabajo().subscribe((data: any[]) => {
      this.ordenes = data;
    });
  }
}