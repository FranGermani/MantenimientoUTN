import { Component, OnInit } from '@angular/core';
import { ActivoService } from '../../../services/activos.service';


@Component({
    selector: 'app-activos-from', 
    templateUrl: './activos-from.component.html',
    styleUrls: ['./activos-from.component.css'] 
  })

export class ActivosFromComponent implements OnInit {
  activos: any[] = []; // Lista de activos
  nombre: string = '';
  tagDiminutivo: string = 'ILUM';
  disponibilidad: number = 1;
  message: string = ''; // Mensaje de respuesta
  editMode: boolean = false; // Modo edición
  editId: number | null = null; // ID del activo en edición

  constructor(private activoService: ActivoService) {}

  ngOnInit(): void {
    this.loadActivos();
  }

  // Cargar todos los activos
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

  // Enviar el formulario para crear o actualizar un activo
  onSubmit(): void {
    const data = {
      nombre: this.nombre,
      tag_diminutivo: this.tagDiminutivo,
      disponibilidad: this.disponibilidad,
    };

    if (this.editMode && this.editId !== null) {
      // Actualizar el activo existente
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
      // Crear un nuevo activo
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

  // Editar un activo
  editActivo(activo: any): void {
    this.nombre = activo.nombre;
    this.tagDiminutivo = activo.tag_diminutivo;
    this.disponibilidad = activo.disponibilidad;
    this.editMode = true;
    this.editId = activo.id_activo;
  }

  // Eliminar un activo
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

  // Restablecer el formulario y salir del modo edición
  resetForm(): void {
    this.nombre = '';
    this.tagDiminutivo = 'ILUM';
    this.disponibilidad = 1;
    this.editMode = false;
    this.editId = null;
  }
}
