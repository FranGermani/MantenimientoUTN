import dotenv from 'dotenv';
dotenv.config();

import express from 'express';
import cors from 'cors';
import { pool } from '../config/db.js';
import pisosRoutes from './routes/pisos.routes.js'; 
import sectoresRoutes from './routes/sectores.routes.js'; 
import ubicacionRoutes from './routes/ubicacion.routes.js'; 
import userRoutes from './routes/usuario.routes.js'; 
import activoTareas from './routes/activostareas.routes.js';
import tareasRoutes from './routes/tareas.routes.js';
import loginRoutes from './routes/login.routes.js'; 


const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:4200', //origin:'http:localhost:/d+$/,
    credentials: true
  }));              
app.use(express.json());       

app.use('/api', pisosRoutes);
app.use('/api', sectoresRoutes);
app.use('/api', ubicacionRoutes);
app.use('/api', userRoutes);     
app.use('/api', activoTareas); 
app.use('/api', tareasRoutes); 
app.use('/api', loginRoutes); 

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
