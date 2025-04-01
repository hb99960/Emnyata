import mongoose from 'mongoose';
import dotenv from 'dotenv';

const MONGO_URI = process.env.MONGO_URI || '';
const MONGO_DB = process.env.MONGO_DB || '';

dotenv.config({ path: `./environments/.env` });

if (!process.env.MONGODB_URI || !process.env.DB_NAME) {
    throw new Error("MONGODB_URI or DB_NAME is missing.");
}

export const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI, {dbName:MONGO_DB});
        console.log(`DB connected successfully`);
    } catch (error){
        console.error("DB connection failed!!", MONGO_URI, MONGO_DB);
    }
}