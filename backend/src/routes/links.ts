import { Router } from 'express';
import { 
    shortenLink, 
    getAllLinks,
    deleteLink, 
    getLink
} from '../controllers/linkController.js'; 

const router = Router();

// Rutas para el acortador de URLs
router.get('/', getAllLinks);          // Obtener todas las URLs (opcional, para admin)
router.post('/shorten', shortenLink);  // Acortar una URL
router.get('/:shortId', getLink);      // Obtener el enlace original de un enlace acortado
router.delete('/:id', deleteLink);     // Eliminar una URL (opcional)

export default router;