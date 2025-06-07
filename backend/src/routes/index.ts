import { Router } from 'express';
import { readdirSync } from 'fs';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const router = Router();
const __dirname = dirname(fileURLToPath(import.meta.url));

const removeExtension = (filename: string) => {
    return filename.split('.').shift();
};

// Ruta de salud (opcional pero útil)
router.get('/health', (_req, res) => {
    res.json({ status: 'OK' });
});

// Carga estática de rutas (mejor para producción)
const routesToLoad = [
    'links'    // Corresponde a links.ts
];

const loadRoutes = async () => {
    for (const routeName of routesToLoad) {
        try {
            const module = await import(`./${routeName}.js`); // Nota: .js aunque el fuente sea .ts
            router.use(`/${routeName}`, module.default);
            console.log(`✅ Ruta /${routeName} cargada correctamente`);
        } catch (err) {
            console.error(`❌ Error al cargar ruta ${routeName}:`, err);
        }
    }
};

await loadRoutes();

export default router;