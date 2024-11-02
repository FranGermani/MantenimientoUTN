import { Component } from '@angular/core';
import { EdificioService } from '../../../services/edificio.service';
import { Edificio } from '../../../interfaces/edificio-form.interface'; 
import { Observable } from 'rxjs'; // Asegúrate de importar Observable

@Component({
  selector: 'app-edificio-form',
  templateUrl: './edificio-form.component.html',
  styleUrls: ['./edificio-form.component.css']
})
export class EdificioFormComponent {
  nombre: string = '';
  direccion: string = '';
  activo: number = 1; 
  labeltag: string = ''; 
  estado: string = 'disponible';
  isEditing: boolean = false; // Estado de modo edición

  constructor(private edificioService: EdificioService) {}

  registrarEdificio() {
    const edificioData: Omit<Edificio, 'id'> = { 
        nombre: this.nombre, 
        direccion: this.direccion, 
        activo: this.activo 
    };

    this.edificioService.crearEdificio(edificioData).subscribe((response: any) => {
        const id = response.id;

        setTimeout(() => {
            const newLabelTag = this.generarLabelTag(id);

            this.edificioService.actualizarEdificio(id, { 
                ...edificioData, 
                labeltag: newLabelTag 
            }).subscribe(() => {
                console.log('Edificio creado y labeltag actualizado:', newLabelTag);

                // Restablecer el formulario después de crear el edificio
                this.resetForm();
            });
        }, 1000);
    });
  }

  generarLabelTag(id: number): string {
    return String(id).padStart(3, '0');
  }

  // Método para restablecer el formulario y salir del modo de edición
  resetForm() {
    this.nombre = '';
    this.direccion = '';
    this.activo = 1;
    this.labeltag = '';
    this.estado = 'disponible';
    this.isEditing = false;
  }
}