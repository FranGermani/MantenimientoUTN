import { Component, OnInit } from '@angular/core';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent implements OnInit {
  currentView: string = 'ordenes';
  ordenes: any[] = [];

  constructor(private ordenTrabajoService: OrdenTrabajoService) {}

  ngOnInit(): void {
    if (this.currentView === 'ordenes') {
      this.obtenerOrdenes();
    }
  }

  setView(view: string) {
    this.currentView = view;
    if (view === 'ordenes') {
      this.obtenerOrdenes();
    }
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
    if (window.confirm('¿Estás seguro de que deseas eliminar esta orden?')) {
      this.ordenTrabajoService.deleteOrdenTrabajo(id).subscribe({
        next: () => {
          console.log('Orden eliminada', id);
          this.ordenes = this.ordenes.filter(orden => orden.id_orden_trabajo !== id);
        },
        error: (error) => {
          console.error('Error al eliminar la orden:', error);
        }
      });
    }
  }
}
