import express from 'express';
import cors from 'cors';
import { pool } from './db.js'; 
import edificiosRoutes from './routes/edificios.routes.js'; 
import pisosRoutes from './routes/pisos.routes.js'; 
import sectoresRoutes from './routes/sectores.routes.js'; 
import ubicacionRoutes from './routes/ubicacion.routes.js'; 
import userRoutes from './routes/usuario.routes.js'; 


const app = express();
const PORT = 3000; 

app.use(cors());     
app.use(express.json());      

app.use('/api', edificiosRoutes); 
app.use('/api', pisosRoutes);    
app.use('/api', sectoresRoutes);  
app.use('/api', ubicacionRoutes); 
app.use('/api', userRoutes);     // arreglar el post y el get, el delete ni lo probe

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ message: 'Internal Server Error' });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
