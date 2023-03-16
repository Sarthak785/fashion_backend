const mongoose= require("mongoose")

const user_Schema= new mongoose.Schema({  // new for new folder, Schema is a object in mongoose
    fullName:{
        type:String
    },
    email:{
        type:String,
        required: 'Email address is required',
        match: [/.+\@.+\..+/, 'Please fill a valid email address']// checks email format from regex,  
    },
    age:{
        type:Number
    },
    dob:{
        type:Number
    },
    address:{
        type:String
    },
    password:{
        type:String
    },
    phone:{
        type:String
    },
    gneder:{
        typer:String,
        enum:["Male","Female","Other"] // enum: only allows valu stored in it
    },
    profilePicUrl:{
        type:String,
        defult:"https://png.pngtree.com/png-clipart/20190629/original/pngtree-vector-edit-profile-icon-png-image_4102545.jpg"
    }


})
//exporting user form database with table name: User
module.exports=mongoose.model("User",user_Schema)