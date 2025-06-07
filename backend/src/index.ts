import express from 'express';
import cors from 'cors';
import connectDB from './config/db.js';
import urlRoutes from './routes/index.js';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

// Rutas
app.use('/api', urlRoutes);

// Manejo de rutas no encontradas
app.use((_req, res) => {
    res.status(404).json({ message: 'Route not found' });
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});

export default app;