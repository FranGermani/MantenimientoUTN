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
  activo: number = 1; 
  labeltag: string = ''; 
  estado: string = 'disponible';

  constructor(private edificioService: EdificioService) {}

  registrarEdificio() {
    const edificioData = { 
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
            });
        }, 1000);
    });
}

  generarLabelTag(id: number): string {
    return String(id).padStart(3, '0');
  }
}
