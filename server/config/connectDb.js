import mongoose from "mongoose";

export const connectDb = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL)
        console.log("Data base connected successfully")
    } catch (error) {
        console.log(error.messsage)
    }
}