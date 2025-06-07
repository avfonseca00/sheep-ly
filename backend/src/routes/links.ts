import { Router } from 'express';
import { 
    shortenLink, 
    getAllLinks,
    deleteLink, 
    getLink
} from '../controllers/linkController.js'; // Importa los controladores

const router = Router();

// Rutas para el acortador de URLs
router.get('/', getAllLinks);          // Obtener todas las URLs (opcional, para admin)
router.post('/shorten', shortenLink);  // Acortar una URL
router.get('/:shortId', getLink); // obtener el enlace original de un enlace acortado
router.delete('/:id', deleteLink);    // Eliminar una URL (opcional)

export default router;