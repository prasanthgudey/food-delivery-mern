import mongoose from "mongoose";

const userSchema= new mongoose.Schema({
    name:{type:String,reuqired:true},
    email:{type:String,reuqired:true ,unique:true},
    password:{type:String,reuqired:true},
    cartData:{type:Object,default:{}}
},{minimize:false})

const userModel=mongoose.models.user || mongoose.model("user",userSchema);

export default userModel;