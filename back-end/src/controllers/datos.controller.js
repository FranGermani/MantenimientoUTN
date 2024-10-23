export const getOperarios = async (req, res) => {
    try {
      const operario = await pool.query(
        "SELECT id_usuario, nombre FROM usuarios"
      );
      res.json(operario);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los operarios" });
    }
  };
  
  export const getEdificios = async (req, res) => {
    try {
      const edificio = await pool.query(
        "SELECT id_edificio, nombre FROM edificio"
      );
      res.json(edificio);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los edificios" });
    }
  };
  
  export const getPisos = async (req, res) => {
    try {
      const piso = await pool.query("SELECT id_piso, nombre FROM piso_nivel");
      res.json(piso);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los pisos" });
    }
  };
  
  export const getSectores = async (req, res) => {
    try {
      const sector = await pool.query("SELECT id_sector, nombre FROM sector");
      res.json(sector);
    } catch (error) {
      res.status(500).json({ error: "Error al obtener los sectores" });
    }
  };
  