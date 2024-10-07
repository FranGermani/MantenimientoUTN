import express from 'express'
import edificiosRoutes from './routes/edificios.routes.js'
import indexRoutes from './routes/index.routes.js'

const app = express()

app.use(indexRoutes);
app.use('/api', edificiosRoutes);

app.listen(3000)
console.log('server running from port 3000')