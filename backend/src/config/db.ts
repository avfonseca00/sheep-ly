import mongoose from 'mongoose';
import 'dotenv/config';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI as string);
        console.log('MongoDB está conectado');
    } catch (error) {
        console.error('Error de conexión a MongoDB:', error);
        process.exit(1);
    }
};

export default connectDB;