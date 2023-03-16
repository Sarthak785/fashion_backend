//copy all file except line 7..and 19..
const express = require('express')
const morgan= require("morgan")
const file_upload= require("express-fileupload") 

//all route import here
const userRoute= require("./routes/userRoute.js")
const productRoute= require("./routes/productRoute.js")

//create backend app from express engine
const app = express()

//use the imported package form line 1
app.use(express.json())
app.use(morgan("tiny"))
app.use(file_upload({useTempFiles:true}))
// four command: get(fetching data from server), put(updating existing data in server), delete(remove data from server), post(adding data to the server)

// route use here
app.use("/user",userRoute)
app.use("/product",productRoute)


module.exports=app