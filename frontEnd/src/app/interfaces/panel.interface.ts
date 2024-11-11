export interface Panel {
  id_orden_trabajo: number;
  fecha_impresion: string;
  hora_impresion: string;
  realizada: boolean; 
  id_usuario: number; 
  nombre_usuario: string;
  nombre_tag: string | null; 
  id_tag: number | null; 
  nombre_activo: string;
  id_activo: number;   
  nombre_edificio: string;
  id_edificio: number; 
  nombre_piso: string;
  id_piso: number;     
  nombre_sector: string;
  id_sector: number;   
  codigo: string | null;
  observacion: string;
  concatenacionIds?: string;
  [key: string]: any; 
}
