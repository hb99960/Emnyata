import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config({ path: `.env` });

console.log("MONGODB_URI:", process.env.MONGODB_URI);
console.log("MONGO_DB_NAME:", process.env.MONGO_DB_NAME);

if (!process.env.MONGODB_URI || !process.env.MONGO_DB_NAME) {
   
    throw new Error("MONGODB_URI or DB_NAME is missing.");
}

const MONGO_URI = process.env.MONGODB_URI;
const MONGO_DB = process.env.MONGO_DB_NAME;

export const connectDB = async() => {
    try{
        await mongoose.connect(MONGO_URI, {dbName:MONGO_DB});
        console.log(`DB connected successfully`);
    } catch (error){
        console.error("DB connection failed!!", MONGO_URI, MONGO_DB);
    }
}