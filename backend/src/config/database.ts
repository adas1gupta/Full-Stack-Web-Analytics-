import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const dbURI = process.env.MONGO_URI as string;

console.log('Mongo URI:', dbURI);

export async function connectDatabase() {
    try {
        await mongoose.connect(dbURI)
        console.log('Connected')
    } catch (error) {
        console.log('Error:', error)
    }
}

export const mongoConnection = mongoose.connection;