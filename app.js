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

app.post("/purchase", async (req, res) => {
    //console.log(req.body);
    const { name, stockName, stockSymbol, shareOutstanding, amountPurchased } = req.body;

    const purchase = {
        stockName: stockName,
        stockSymbol: stockSymbol,
        shareOutstanding: shareOutstanding,
        amountPurchased: amountPurchased,
        purchaseDate: new Date()
    }


    try{
        const user = await collection.findOne({ name: name });
        if (user) {
            user.purchases.push(purchase);
            console.log(user);
            await user.save();
            res.json("success");
        } else {
            res.json("user not found");
        }
    }
    catch(e){
        res.json("fail")
    }
});

app.get('/portfolio', async (req, res) => {
    try {
        const data = await collection.find({});
        res.json(data);
    } catch (e) {
        console.error('Error fetching data from MongoDB:', e);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.listen(8000,()=>{
    console.log("port connected");
})
