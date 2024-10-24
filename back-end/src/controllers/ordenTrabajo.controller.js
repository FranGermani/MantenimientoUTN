import { pool } from '../../config/db.js';
import { format, parse } from 'date-fns';

export const getOrdenTrabajo = async (req, res) => {
    try {
        const query = `
        SELECT 
            ot.id_orden_trabajo, 
            ot.fecha_impresion, 
            ot.hora_impresion, 
            ot.realizada, 
            ot.id_usuario,
            ot.id_tag,
            ot.id_activo,
            e.nombre AS nombre_edificio, 
            e.direccion AS direccion_edificio,
            p.nombre AS nombre_piso, 
            s.nombre AS nombre_sector, 
            a.nombre AS nombre_activo,
            ot.codigo, 
            ot.observacion
        FROM orden_trabajo ot
        LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
        LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
        LEFT JOIN sector s ON ot.id_sector = s.id_sector
        LEFT JOIN activo a ON ot.id_activo = a.id_activo
        `;
        
        const [rows] = await pool.query(query);
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
    ot.hora_impresion, 
    ot.realizada, 
    ot.id_usuario,
    ot.id_tag,
    ot.id_activo,
    e.nombre AS nombre_edificio, 
    e.direccion AS direccion_edificio,
    p.nombre AS nombre_piso, 
    s.nombre AS nombre_sector, 
    a.nombre AS nombre_activo,
    ot.codigo, 
    ot.observacion
FROM orden_trabajo ot
LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
LEFT JOIN sector s ON ot.id_sector = s.id_sector
LEFT JOIN activo a ON ot.id_activo = a.id_activo -- Hacer LEFT JOIN con la tabla activo
WHERE ot.id_orden_trabajo = ?;
`;

try {
    const [rows] = await pool.query(query, [id]);
    
    // Verifica si la consulta devolvió algún resultado
    if (rows.length === 0) {
        return res.status(404).json({ message: "Orden de trabajo no encontrada" });
    }

    // Responde con todos los datos, incluyendo id_activo
    res.status(200).json(rows[0]); // Aquí se incluye id_activo si está en los resultados
} catch (err) {
    console.error('Error al obtener los detalles de la orden de trabajo:', err);
    res.status(500).json({ message: 'Error interno del servidor' });
}
};

export const nuevaODT = async (req, res) => {
    const { 
        fecha_impresion, 
        hora_impresion, 
        realizada, 
        id_usuario, 
        id_sector, 
        id_piso, 
        id_edificio, 
        id_tag,
        id_activo,
        codigo, 
        observacion
    } = req.body;

    console.log('Valores recibidos:', {
        fecha_impresion, 
        hora_impresion, 
        realizada, 
        id_usuario, 
        id_sector, 
        id_piso, 
        id_edificio, 
        id_tag,
        id_activo,
        codigo, 
        observacion
    });

    const formattedFechaImpresion = format(new Date(fecha_impresion), 'yyyy-MM-dd');
    const formattedHoraImpresion = format(new Date(hora_impresion), 'yyyy-MM-dd HH:mm:ss');

    const query = `
        INSERT INTO orden_trabajo (
            fecha_impresion, 
            hora_impresion,
            realizada, 
            id_usuario, 
            id_sector, 
            id_piso, 
            id_edificio, 
            id_tag,
            id_activo,
            codigo, 
            observacion
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
    `;

    try {
        const [result] = await pool.query(query, [
            formattedFechaImpresion, 
            formattedHoraImpresion, 
            realizada, 
            id_usuario, 
            id_sector, 
            id_piso, 
            id_edificio, 
            id_tag,
            id_activo,
            codigo, 
            observacion
        ]);
        res.status(201).json({ message: "Orden de trabajo creada.", id_orden_trabajo: result.insertId });
    } catch (err) {
        console.error('Error al crear la orden de trabajo:', err);
        res.status(500).json({ message: 'Error interno del servidor' });
    }
};

