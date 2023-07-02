const express=require("express");
const bodyParser=require("body-parser");
const cors=require("cors");
const SignupUser = require("./Schema");


require("./mongodb");
const server= express();
server.use(bodyParser.json());
server.use(express.json());
server.use(cors());

//employe post api...........................................................................
server.post("/emp-post",async(req,res)=>{
    let user =new SignupUser()
    user.name=req.body.name;
    user.email=req.body.email;
    user.number=req.body.number;
   const doc= await user.save()
   console.log(doc)
    console.log(req.body)
    res.json(req.body)
    try{
        if(user){
            res.status(200).json({
                doc:doc,
                status:true,
                message:"User Created...!"
            })
        }
        else{
            res.status(404).json({
                error:err,
                message:"Something went wrong"
            });
        }
    }catch(err){ 
console.log(err)
    }
   
});

//emloye data get api...........................................................
server.get("/emp-get", async (req,res)=>{
    const user = await SignupUser.find();
    res.send(user);
});

//emloye update api..............................................................
server.patch("/employee/:id", async(req,res)=>{
    const id = req.params.id;
    const doc = await SignupUser.findByIdAndUpdate(id, req.body)
    console.log(doc);
    console.log("patch body",req.body);      
    res.json(req.body);
});

//employe update data get api.........................................................
server.get("/employee/:id", async(req,res)=>{
    const id = req.params.id;
    const result = await SignupUser.findOne({_id:id});
    res.json({"user":result});
});


//employe delete api..................................................................
server.delete("/employee/:id",async(req,res)=>{
    try{
        const id = req.params.id;
        const doc = await SignupUser.findByIdAndDelete(id)
        console.log(req.body);      
        if(doc){ 
            res.status(200).json({
                doc:doc,
                status:true,
                message:"User Deleted...!"
            })
        };
    } catch(err) {
        res.status(404).json({
            error:err,
            message:"Something went wrong"
        });
    }
})


//server port....................................................................
server.listen(8080, ()=>{
    console.log("Server Starting at 8080... ");
}); 