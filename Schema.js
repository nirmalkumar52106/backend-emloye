const mongoose=require("mongoose")

const SignupSchema = new mongoose.Schema({
    name: String,
    email: String,
    number:Number,
    
  }); 
  const SignupUser = mongoose.model('newemployes', SignupSchema);

  module.exports=SignupUser