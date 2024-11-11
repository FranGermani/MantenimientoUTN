import { pool } from "../../config/db.js";
import { format, parse } from "date-fns";

export const getOrdenTrabajo = async (req, res) => {
  try {
    const query = `
        SELECT 
            ot.id_orden_trabajo, 
            ot.fecha_impresion, 
            ot.hora_impresion, 
            ot.realizada, 
            ot.id_usuario,
            u.nombre AS nombre_usuario,  -- Obtener el nombre del usuario
            u.id_usuario AS id_usuario,   -- Incluir el ID del usuario
            t.nombre AS nombre_tag,       -- Obtener el nombre del tag
            t.id_tag AS id_tag,           -- Incluir el ID del tag
            a.nombre AS nombre_activo,    -- Obtener el nombre del activo
            a.id_activo AS id_activo,     -- Incluir el ID del activo
            e.nombre AS nombre_edificio, 
            e.id_edificio AS id_edificio,  -- Incluir el ID del edificio
            p.nombre AS nombre_piso, 
            p.id_piso AS id_piso,         -- Incluir el ID del piso
            s.nombre AS nombre_sector, 
            s.id_sector AS id_sector,      -- Incluir el ID del sector
            ot.codigo, 
            ot.observacion
        FROM orden_trabajo ot
        LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
        LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
        LEFT JOIN sector s ON ot.id_sector = s.id_sector
        LEFT JOIN activo a ON ot.id_activo = a.id_activo
        LEFT JOIN usuario u ON ot.id_usuario = u.id_usuario
        LEFT JOIN tag t ON ot.id_tag = t.id_tag
        `;

    const [rows] = await pool.query(query);
    res.json(rows);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal Server Error" });
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
    u.nombre AS nombre_usuario,  -- Obtener el nombre del usuario
    u.id_usuario AS id_usuario,   -- Incluir el ID del usuario
    t.nombre AS nombre_tag,       -- Obtener el nombre del tag
    t.id_tag AS id_tag,           -- Incluir el ID del tag
    a.nombre AS nombre_activo,    -- Obtener el nombre del activo
    a.id_activo AS id_activo,     -- Incluir el ID del activo
    e.nombre AS nombre_edificio, 
    e.id_edificio AS id_edificio,  -- Incluir el ID del edificio
    p.nombre AS nombre_piso, 
    p.id_piso AS id_piso,         -- Incluir el ID del piso
    s.nombre AS nombre_sector, 
    s.id_sector AS id_sector,      -- Incluir el ID del sector
    ot.codigo, 
    ot.observacion,
    ot.id_tipo_orden,             -- Incluir el ID del tipo de orden
    tipo_orden.descripcion AS descripcion_tipo_orden  -- Obtener la descripción del tipo de orden
    FROM orden_trabajo ot
    LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
    LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
    LEFT JOIN sector s ON ot.id_sector = s.id_sector
    LEFT JOIN activo a ON ot.id_activo = a.id_activo
    LEFT JOIN usuario u ON ot.id_usuario = u.id_usuario
    LEFT JOIN tag t ON ot.id_tag = t.id_tag
    LEFT JOIN tipo_orden tipo_orden ON ot.id_tipo_orden = tipo_orden.id_tipo_orden
    WHERE ot.id_orden_trabajo = ?;

`;

  try {
    const [rows] = await pool.query(query, [id]);

    if (rows.length === 0) {
      return res
        .status(404)
        .json({ message: "Orden de trabajo no encontrada" });
    }

    res.status(200).json(rows[0]);
  } catch (err) {
    console.error("Error al obtener los detalles de la orden de trabajo:", err);
    res.status(500).json({ message: "Error interno del servidor" });
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
    id_tipo_orden,
    observacion,
  } = req.body;

  console.log("Valores recibidos:", {
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
    id_tipo_orden,
    observacion,
  });

  const formattedFechaImpresion = format(
    new Date(fecha_impresion),
    "yyyy-MM-dd"
  );
  const formattedHoraImpresion = format(
    new Date(hora_impresion),
    "yyyy-MM-dd HH:mm:ss"
  );

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
            id_tipo_orden, 
            observacion
        ) 
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);
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
      id_tipo_orden,
      observacion,
    ]);
    res
      .status(201)
      .json({
        message: "Orden de trabajo creada.",
        id_orden_trabajo: result.insertId,
      });
  } catch (err) {
    console.error("Error al crear la orden de trabajo:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }

};
export const deleteOrdenTrabajo = async (req, res) => {
  const { id } = req.params;

  try {
    console.log(`Intentando eliminar la orden con ID: ${id}`); 
    const [result] = await pool.query(
      "DELETE FROM orden_trabajo WHERE id_orden_trabajo = ?",
      [id]
    );

    console.log("Resultado de la consulta:", result); 
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Orden de trabajo no encontrada" });
    }

    res.status(200).json({ message: "Orden de trabajo eliminada exitosamente" });
  } catch (err) {
    console.error("Error al eliminar la orden de trabajo:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getConcatenacionIds = async (req, res) => {
  const { id } = req.params;

  const query = `
    SELECT 
      u.id_usuario, 
      e.id_edificio, 
      p.id_piso AS piso_nivel, 
      s.id_sector, 
      a.id_activo
    FROM 
      orden_trabajo ot
    LEFT JOIN usuario u ON ot.id_usuario = u.id_usuario
    LEFT JOIN edificio e ON ot.id_edificio = e.id_edificio
    LEFT JOIN piso_nivel p ON ot.id_piso = p.id_piso
    LEFT JOIN sector s ON ot.id_sector = s.id_sector
    LEFT JOIN activo a ON ot.id_activo = a.id_activo
    WHERE 
      ot.id_orden_trabajo = ?
  `;

  try {
    const [rows] = await pool.query(query, [id]);

    if (rows.length === 0) {
      console.log("No se encontró la orden de trabajo con ID:", id);
      return res.status(404).json({ message: "Orden de trabajo no encontrada" });
    }

    const { id_usuario, id_edificio, piso_nivel, id_sector, id_activo } = rows[0];
    console.log("ID Usuario:", id_usuario);
    console.log("ID Edificio:", id_edificio);
    console.log("Piso Nivel:", piso_nivel);
    console.log("ID Sector:", id_sector);
    console.log("ID Activo:", id_activo);

    const concatenacion = `${id_usuario}-${id_edificio}-${piso_nivel}-${id_sector}-${id_activo}`;
    console.log("Concatenación de IDs:", concatenacion);

    res.status(200).json({ concatenacion });
  } catch (err) {
    console.error("Error al obtener la concatenación de IDs:", err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const getTiposOrden = async (req, res) => {
  try {
    const query = `SELECT * FROM tipo_orden`; 
    const [rows] = await pool.query(query);
    res.json(rows);  
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Error interno del servidor" });
  }
};

export const actualizarRealizada = async (req, res) => {
  const { id } = req.params;         
  let { realizada } = req.body;      

  console.log(`ID recibido: ${id}`);
  console.log(`Valor de 'realizada' recibido: ${realizada}`);

  if (typeof realizada === 'undefined') {
    return res.status(400).json({ message: 'El campo realizada es obligatorio' });
  }

  realizada = realizada ? 1 : 0;

  try {
    const query = 'UPDATE orden_trabajo SET realizada = ? WHERE id_orden_trabajo = ?';
    const [result] = await pool.query(query, [realizada, id]);

    console.log(`Filas afectadas: ${result.affectedRows}`);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Orden de trabajo no encontrada' });
    }

    res.status(200).json({ message: 'Orden de trabajo actualizada correctamente' });
  } catch (error) {
    console.error('Error al actualizar la columna realizada:', error);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
};
