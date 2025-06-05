import { Schema, model, Document } from 'mongoose';

interface ILink extends Document {
    shortId: string;
    originalLink: string;
    createdAt: Date;
}

const linkSchema = new Schema<ILink>({
    shortId: { type: String, required: true, unique: true },
    originalLink: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

export default model<ILink>('Link', linkSchema);