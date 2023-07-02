const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/mydb",{
  useNewUrlParser: true,
    useUnifiedTopology: true, 
    family: 4
}).then(()=>{
  console.log("Mongo Db connected successfully!!");
}).catch((err)=>{
  console.log("error", err)
})

 
