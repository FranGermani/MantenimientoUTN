import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OrdenTrabajoService } from '../../../services/orden-trabajo.service';

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.css']
})
export class ReporteComponent implements OnInit {
  orden: any;

  constructor(
    private route: ActivatedRoute,
    private ordenTrabajoService: OrdenTrabajoService
  ) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      const id = Number(params.get('id')); 

      this.ordenTrabajoService.getOrdenDetalle(id).subscribe({
        next: (orden) => {
          this.orden = orden;
        },
        error: (error) => {
          console.error('Error al obtener los detalles de la orden:', error);
        }
      });
    });
  }
}