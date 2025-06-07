import { Router } from 'express';
import linksRouter from './links.js'; // Importa como .js (compilado)

const router = Router();

// Ruta de salud
router.get('/health', (_req, res) => {
    res.json({ status: 'OK', version: '1.0.0' });
});

// Montar las rutas de links bajo /links
router.use('/links', linksRouter); // Ahora las rutas serán /api/links/...

export default router;