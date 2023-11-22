const mongoose=require("mongoose")
mongoose.connect("mongodb://0.0.0.0:27017/investment-portfolio-website")
.then(()=>{
    console.log("mongodb connected");
})
.catch(()=>{
    console.log('failed');
})


const newSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    purchases: [{
        name: String,
        stockName: String,
        stockSymbol: String,
        shareOutstanding: Number,
        amountPurchased: String,
        purchaseDate: { type: Date, default: Date.now }
    }]
})
const collection = mongoose.model("collection",newSchema)

module.exports=collection