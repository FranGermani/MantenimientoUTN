import { Component } from '@angular/core';
import { EdificioService } from '../../../services/edificio.service';

@Component({
  selector: 'app-edificio-form',
  templateUrl: './edificio-form.component.html',
  styleUrls: ['./edificio-form.component.css']
})
export class EdificioFormComponent {
  nombre: string = '';
  direccion: string = '';
  activo: number = 1; // Puedes cambiar esto según tu lógica
  labeltag: string = ''; // Mantenlo vacío al inicio
  estado: string = 'disponible'; // Inicializa la propiedad estado con un valor predeterminado

  constructor(private edificioService: EdificioService) {}

  registrarEdificio() {
    const edificioData = { 
        nombre: this.nombre, 
        direccion: this.direccion, 
        activo: this.activo 
    };

    // Llama al servicio para crear el edificio
    this.edificioService.crearEdificio(edificioData).subscribe((response: any) => {
        const id = response.id; // Obtiene el ID del edificio creado

        // Espera 1 segundo antes de actualizar el labeltag
        setTimeout(() => {
            // Genera el label tag basado en el ID del edificio creado
            const newLabelTag = this.generarLabelTag(id);

            // Llama al servicio para actualizar el edificio con el nuevo labeltag
            this.edificioService.actualizarEdificio(id, { 
                ...edificioData, 
                labeltag: newLabelTag 
            }).subscribe(() => {
                console.log('Edificio creado y labeltag actualizado:', newLabelTag);
            });
        }, 1000); // Pausa de 1 segundo
    });
}

  // Método para generar el label tag con ceros delante
  generarLabelTag(id: number): string {
    return String(id).padStart(3, '0'); // Convierte el ID a string y agrega ceros delante
  }
}
