import mongoose from "mongoose";

export const connectdb= async ()=>{
    await mongoose.connect('mongodb+srv://prasanthkumargudeymine:Prasanth2003@cluster0.pcvm6lw.mongodb.net/food-del').then(()=>{
        console.log('db connected');
    })
}