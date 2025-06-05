import { Router } from 'express';
import { readdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url)); // Reemplazo de __dirname en ESM
const PATH = __dirname;

const removeExtension = (filename: string) => {
    return filename.split('.').shift();
};

const loadRoutes = async () => {
    const files = readdirSync(PATH);
    for (const file of files) {
        const name = removeExtension(file);
        if (name !== 'index') {
            try {
                // Importación dinámica con extensión explícita (necesaria en ESM)
                const module = await import(`./${file}?ts=${Date.now()}`); // Usamos un query param para evitar caché en desarrollo
                router.use(`/${name}`, module.default);
            } catch (err) {
                console.error(`Error al cargar la ruta ${file}:`, err);
            }
        }
    }
};

await loadRoutes(); // Cargamos las rutas antes de exportar

export default router;