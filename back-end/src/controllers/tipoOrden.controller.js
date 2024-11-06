// src/controllers/tipoOrden.controller.js
import { pool } from '../../config/db.js';

export const getTiposOrden = async (req, res) => {
    console.log('Llamando a la función getTiposOrden');  // Verifica si esta línea se imprime
    try {
      const query = 'SELECT * FROM tipo_orden';
      const [rows] = await pool.query(query);
      console.log('Datos obtenidos de la base de datos:', rows);  // Verifica los datos obtenidos
      res.json(rows);
    } catch (err) {
      console.error('Error en getTiposOrden:', err);  // Verifica el error
      res.status(500).json({ message: "Error interno del servidor" });
    }
  };
  
