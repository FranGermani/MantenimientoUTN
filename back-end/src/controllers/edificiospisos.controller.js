import { pool } from '../../config/db.js'; // Importar el pool de conexiones

const obtenerPisosPorEdificio = async (req, res) => {
  try {
    const { id_edificio } = req.params; // Obtener el ID del edificio desde los parámetros de la ruta

    // Consulta SQL para obtener el edificio UTN
    const edificioQuery = `
      SELECT * 
      FROM edificio 
      WHERE id_edificio = ? AND nombre = 'UTN FRVT'
    `;

    // Consulta SQL para obtener los pisos específicos del edificio UTN
    const pisosQuery = `
      SELECT p.* 
      FROM piso_nivel p
      WHERE p.nombre IN ('Planta Baja', '1er. Piso', '2do. Piso', 'Nivel 0', 'Nivel Bajo 0')
    `;

    // Validar que se está pidiendo el edificio correcto (UTN)
    if (id_edificio != 1) {
      return res.status(400).json({ message: 'Este edificio no está soportado actualmente' });
    }

    // Ejecutar las consultas
    const [edificio] = await pool.query(edificioQuery, [id_edificio]);
    const [pisos] = await pool.query(pisosQuery);

    // Si no se encuentra el edificio, enviar error
    if (edificio.length === 0) {
      return res.status(404).json({ message: 'Edificio no encontrado' });
    }

    // Responder con el edificio y sus pisos
    res.json({
      edificio: edificio[0], // El edificio encontrado
      pisos: pisos // Los pisos del edificio
    });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error al obtener el edificio y sus pisos');
  }
};

export { obtenerPisosPorEdificio }; // Asegúrate de exportar correctamente
