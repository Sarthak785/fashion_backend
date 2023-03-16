//only model required, models start with capital letter(this comes from schema)
const Product= require("../models/Product.js")

exports.add_new_product=async (req, res) => { 
    try {
      const {productName, price, distributer, quantityAvialable}=req.body
      const newProduct= new Product({productName:productName, price:price, distributer:distributer, quantityAvialable: quantityAvialable})
      const savedProduct= await newProduct.save()
      res.status(201).json({
        success: true,
        message: "Product has been added",
        data: savedProduct
      })
    } catch (error) {    
      res.status(500).json({
      success: false,
      message: error,
      })
    }
    }

exports.get_all=async (req,res)=>{
    try {
      const productData= await Product.find()
      res.status(200).json({
        success: true,
        message: "Product has been fetched sucessfully",
        data: productData
      })
    } catch (error) {
      res.status(500).json({
        success:false,
        message:error
      })
    }
  }