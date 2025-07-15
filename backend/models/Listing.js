const mongoose=require("mongoose")

const listingShema=new mongoose.Schema({
    title:String,
    price:Number,
    category:String,
    condition: String,
    exchange:String,
    location:String,
    phoneNumber:Number,
    description:String,
    images:[String],
    owner: String,
    
});
 //const Listing=mongoose.model("Listing", listingShema);
// export default Listing; they are also ok
module.exports=mongoose.model("Listing", listingShema);