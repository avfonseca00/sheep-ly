import { Router } from 'express';
import { 
    shortenLink, 
    getAllLinks,
    deleteLink 
} from '../controllers/linkController.js'; // Importa los controladores

const router = Router();

// Rutas para el acortador de URLs
router.get('/', getAllLinks);          // Obtener todas las URLs (opcional, para admin)
router.post('/shorten', shortenLink);  // Acortar una URL
router.delete('/:id', deleteLink);    // Eliminar una URL (opcional)
//router.get('/:shortId', redirectLink); // Esta ruta fue agregada en el index.ts del servidor para usar la ruta principal '/'

export default router;