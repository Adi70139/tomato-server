import mongoose from "mongoose";

export const  connectDB = async () =>{
    await mongoose.connect('mongodb+srv://greatstack:1IKiEOPhkyebUOrf@cluster0.qyyzd8a.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}

