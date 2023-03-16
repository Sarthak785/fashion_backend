//copy 1 to 3
const express = require('express')
const router= new express.Router()
const productController= require("../controller/productController.js")

//add product
router.post("/add",productController.add_new_product)

//get all product
router.get("/get",productController.get_all)
module.exports= router