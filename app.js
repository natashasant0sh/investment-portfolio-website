const express = require("express")
const collection = require("./src/mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())



app.get("/pages/Login",cors(),(req,res)=>{

})


app.post("/pages/Login", async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await collection.findOne({ name: name });

        if (user) {
            if (user.password === password) {
                res.json("exist");
            } else {
                res.json("wrong password");
            }
        } else {
            res.json("notexist");
        }
    } catch (e) {
        res.json("fail");
    }
});



app.post("/pages/SignUp",async(req,res)=>{
    const{name,password}=req.body

    const data={
        name:name,
        password:password
    }

    try{
        const check=await collection.findOne({name:name})

        if(check){
            res.json("exist")
        }
        else{
            res.json("notexist")
            await collection.insertMany([data])
        }

    }
    catch(e){
        res.json("fail")
    }

})

app.listen(8000,()=>{
    console.log("port connected");
})
