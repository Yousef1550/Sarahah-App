import mongoose from "mongoose";



export const database_conncection = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URI)
        console.log('Database Connected Successfully!');
        
    } catch (error) {
        console.log('Error connecting to database', error);
    }
}