import { Schema, model, Document } from 'mongoose';

interface IUrl extends Document {
    shortId: string;
    originalUrl: string;
    createdAt: Date;
}

const urlSchema = new Schema<IUrl>({
    shortId: { type: String, required: true, unique: true },
    originalUrl: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default model<IUrl>('Url', urlSchema);