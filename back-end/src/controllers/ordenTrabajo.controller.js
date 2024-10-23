import { pool } from '../../config/db.js';
import { format, parse } from 'date-fns';

export const getOrdenTrabajo = async (req, res) => {
    try {
        const [rows] = await pool.query('SELECT * FROM orden_trabajo'); 
        res.json(rows);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Internal Server Error' });
    }
};

export const getDetallesOrdenTrabajo = async (req, res) => {
    const { id } = req.params;

    const query = `
    SELECT 
    ot.id_orden_trabajo, 
    ot.fecha_impresion, 
    ot.hora_inicio, 
    ot.hora_final, 
    ot.realizada, 
    ot.id_usuario,
    ot.id_tag,
    e.nombre AS nombre_edificio, 
    e.direccion AS direccion_edificio,
    p.nombre AS nombre_piso, 
    s.nombre AS nombre_sector, 
    ot.fecha_impresion AS fecha_creacion,
    ot.observacion  -- Añadir la columna observacion
FROM orden_trabajo ot
LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
LEFT JOIN sector s ON ot.id_sector = s.id_sector
WHERE ot.id_orden_trabajo = ?;
`;

    try {
        const [rows] = await pool.query(query, [id]);

        if (rows.length === 0) {
            return res.status(404).json({ message: 'Detalles de orden de trabajo no encontrados' });
        }

        res.json(rows[0]);
    } catch (err) {
        console.error('Error al obtener los detalles de la orden de trabajo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

export const nuevaODT = async (req, res) => {
    const { 
        fecha_impresion, 
        hora_inicio, 
        hora_final, 
        realizada, 
        id_usuario, 
        id_sector, 
        id_piso, 
        id_edificio, 
        id_tag, 
        observacion
    } = req.body;

    const formattedFechaImpresion = format(new Date(fecha_impresion), 'yyyy-MM-dd'); // Cambia el formato si es necesario
    const formattedHoraInicio = format(new Date(hora_inicio), 'yyyy-MM-dd HH:mm:ss');
    const formattedHoraFinal = format(new Date(hora_final), 'yyyy-MM-dd HH:mm:ss');

    const query = `
        INSERT INTO orden_trabajo (
            fecha_impresion, 
            hora_inicio, 
            hora_final, 
            realizada, 
            id_usuario, 
            id_sector, 
            id_piso, 
            id_edificio, 
            id_tag, 
            observacion
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
    `;

    try {
        const [result] = await pool.query(query, [
            formattedFechaImpresion, 
            formattedHoraInicio, 
            formattedHoraFinal, 
            realizada, 
            id_usuario, 
            id_sector, 
            id_piso, 
            id_edificio, 
            id_tag, 
            observacion
        ]);
        res.status(201).json({ message: "Orden de trabajo creada.", id_orden_trabajo: result.insertId });
    } catch (err) {
        console.error('Error al crear la orden de trabajo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

