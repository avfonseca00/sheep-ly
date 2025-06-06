import { Request, Response } from 'express';
import { nanoid } from 'nanoid';
import models from '../models/index.js';

const {linkModel} = models

// Acortar URL
export const shortenLink = async (req: Request, res: Response) => {
    const { originalLink } = req.body;
    const shortId = nanoid(8);
    const protocol = req.headers['x-forwarded-proto'] || 'http';

    try {
        await linkModel.create({ shortId, originalLink });
        res.json({ shortLink: `${process.env.CLIENT_URI}/${shortId}` });
    } catch (error) {
        res.status(500).json({ error: 'Error al acortar la URL' });
    }
};

// Redirigir URL
export const getLink = async (req: Request, res: Response) => {
    const { shortId } = req.params;

    try {
        const link = await linkModel.findOne({ shortId });
        if (!link) return res.status(404).json({ error: 'URL no encontrada' });
        res.json({originalLink: link.originalLink});
    } catch (error) {
        res.status(500).json({ error: 'Error al redirigir' });
    }
};

// Obtener todas las URLs (opcional)
export const getAllLinks = async (req: Request, res: Response) => {
    try {
        const links = await linkModel.find();
        res.json(links);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener URLs' });
    }
};

// Eliminar URL (opcional)
export const deleteLink = async (req: Request, res: Response) => {
    const { id } = req.params;

    try {
        await linkModel.findByIdAndDelete(id);
        res.json({ message: 'URL eliminada' });
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar URL' });
    }
};