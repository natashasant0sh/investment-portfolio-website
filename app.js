const express = require("express")
const collection = require("./src/mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(cors())

const bcrypt = require('bcrypt');



app.get("/pages/Login",cors(),(req,res)=>{

})


app.post("/pages/Login", async (req, res) => {
    const { name, password } = req.body;

    try {
        const user = await collection.findOne({ name: name });

        if (user) {
            // Compare the entered password with the hashed password in the database
            const validPassword = await bcrypt.compare(password, user.password);
            if (validPassword) {
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


app.post("/pages/SignUp", async (req, res) => {
    const { name, password } = req.body;

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const data = {
        name: name,
        password: hashedPassword
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
