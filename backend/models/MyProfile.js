const mongoose=require("mongoose");
const profileSchema=new mongoose.Schema({
    name:String,
    phone:Number,
    email:{type:String, unique:true},
    profilePhoto:String,
});
module.exports=mongoose.model("MyProfile", profileSchema);