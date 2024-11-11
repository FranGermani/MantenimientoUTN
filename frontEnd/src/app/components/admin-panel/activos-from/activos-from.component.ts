import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../services/activos.service';
import { Activo } from '../../../interfaces/activos-from.interface';


@Component({
    selector: 'app-activos-from', 
    templateUrl: './activos-from.component.html',
    styleUrls: ['./activos-from.component.css'] 
  })

export class ActivosFromComponent implements OnInit {
  activos: Activo[] = [];
  nombre: string = '';
  tagDiminutivo: string = 'ILUM';
  disponibilidad: number = 1;
  message: string = '';
  editMode: boolean = false;
  editId: number | null = null;

  constructor(private activoService: ActivoService) {}

  ngOnInit(): void {
    this.loadActivos();
  }

  loadActivos(): void {
    this.activoService.getActivos().subscribe({
      next: (data) => {
        this.activos = data;
      },
      error: (error) => {
        console.error('Error al cargar los activos:', error);
      },
    });
  }

  onSubmit(): void {
    const data: Activo = {
      nombre: this.nombre,
      tag_diminutivo: this.tagDiminutivo,
      disponibilidad: this.disponibilidad,
    };

    if (this.editMode && this.editId !== null) {
      this.activoService.updateActivo(this.editId, data).subscribe({
        next: () => {
          this.message = 'Activo actualizado exitosamente';
          this.resetForm();
          this.loadActivos();
        },
        error: (error) => {
          console.error('Error al actualizar el activo:', error);
          this.message = 'Error al actualizar el activo';
        },
      });
    } else {
      this.activoService.createActivo(data).subscribe({
        next: () => {
          this.message = 'Activo registrado exitosamente';
          this.resetForm();
          this.loadActivos();
        },
        error: (error) => {
          console.error('Error al registrar el activo:', error);
          this.message = 'Error al registrar el activo';
        },
      });
    }
  }

  editActivo(activo: Activo): void {
    this.nombre = activo.nombre;
    this.tagDiminutivo = activo.tag_diminutivo;
    this.disponibilidad = activo.disponibilidad;
    this.editMode = true;
  }

  deleteActivo(id: number): void {
    this.activoService.deleteActivo(id).subscribe({
      next: () => {
        this.message = 'Activo eliminado exitosamente';
        this.loadActivos();
      },
      error: (error) => {
        console.error('Error al eliminar el activo:', error);
        this.message = 'Error al eliminar el activo';
      },
    });
  }

  resetForm(): void {
    this.nombre = '';
    this.tagDiminutivo = 'ILUM';
    this.disponibilidad = 1;
    this.editMode = false;
    this.editId = null;
  }
}
