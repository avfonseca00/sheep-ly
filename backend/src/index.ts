import express from 'express';
import cors from 'cors';
import connectDB from './config/db';
import 'dotenv/config';

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// Conexión a MongoDB
connectDB();

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});