import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../services/orden-trabajo.service';

@Component({
  selector: 'app-orden-trabajo-tabla',
  templateUrl: './orden-trabajo-tabla.component.html',
  styleUrls: ['./orden-trabajo-tabla.component.css']
})
export class OrdenTrabajoTablaComponent implements OnInit {
  ordenes: any[] = [];

  constructor(private ordenTrabajoService: OrdenTrabajoService) { }

  ngOnInit(): void {
    this.obtenerOrdenes();
  }

  obtenerOrdenes() {
    this.ordenTrabajoService.getOrdenesTrabajo().subscribe((data: any[]) => {
      this.ordenes = data;
    });
  }

  verDetalle(id: number) {
    console.log('Ver detalle', id);
  }

  editarOrden(id: number) {
    console.log('Editar orden', id);
  }

  eliminarOrden(id: number) {
    console.log('Eliminar orden', id);
  }
}
