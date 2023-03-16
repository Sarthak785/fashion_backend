const mongoose= require("mongoose")

const product_Schema= new mongoose.Schema({
    productName:{
        type:String,
        required: "name cannot be blank",
    },
    price:{
        type:Number

    },
    distributer:{
        type:String,
        required: "the name of distributer must be stated"
    },
    quantityAvialable:{
        Type:Number
    }

})
module.exports= mongoose.model("Product", product_Schema)