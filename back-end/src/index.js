<<<<<<< HEAD
// index.js
import express from 'express';
import cors from 'cors';
import { pool } from './db.js'; // Importar la conexión a la base de datos
import edificiosRoutes from './routes/edificios.routes.js'; // Importar las rutas de edificios
import pisosRoutes from './routes/pisos.routes.js'; // Importar las rutas de pisos
import sectoresRoutes from './routes/sectores.routes.js'; // Importar las rutas de sectores
import ubicacionRoutes from './routes/ubicacion.routes.js'; // Asegúrate de que la ruta sea correcta
import userRoutes from './routes/usuario.routes.js'; // No te olvides de importar las rutas de usuarios


const app = express();
const PORT = 3000; // Cambia a un puerto libre, por ejemplo, 5000

app.use(cors());                // Habilitar CORS
app.use(express.json());       // Habilitar el manejo de JSON en el cuerpo de las solicitudes

// Usar las rutas
app.use('/api', edificiosRoutes); // Prefijo para las rutas de edificios
app.use('/api', pisosRoutes);      // Prefijo para las rutas de pisos
app.use('/api', sectoresRoutes);   // Prefijo para las rutas de sectores
app.use('/api', ubicacionRoutes); // Rutas de ubicaciones
app.use('/api', userRoutes);     // arreglar el post y el get, el delete ni lo probe

// Middleware para manejar errores
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
=======
import express from 'express'
import edificiosRoutes from './routes/edificios.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes);
app.use('/api', edificiosRoutes);

app.listen(3000)
console.log('server running from port 3000')
>>>>>>> 5ccb2529453dfa152c29defb53748b25cdb6dd13
