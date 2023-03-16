//copy 1 to 3
const express = require('express')
const router= new express.Router()
const userController= require("../controller/userController.js")

//add product
router.post("/register",userController.register_user)

//get all product
router.get("/get",userController.get_all_user)
module.exports= router