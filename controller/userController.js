//only model required, models start with capital letter(this comes from schema)
const User= require("../models/User.js")

exports.register_user=async (req, res) => { 
    try {
      const {fullName, email, password, phone}=req.body
      const newUser= new User({fullName:fullName, email:email, password:password, phone: phone})
      const registeredUser= await newUser.save()
      res.status(201).json({
        success: true,
        message: "registered sucessfully",
        data: registeredUser
      })
    } catch (error) {    
      res.status(500).json({
      success: false,
      message: error,
      })
    }
    }
//get all reistered user
exports.get_all_user=async (req,res)=>{
        try {
          const userData= await User.find()
          res.status(200).json({
            success: true,
            message: "fetched all user",
            data: userData
          })
           } catch (error) {
          res.status(500).json({
            success:false,
            message:error
          })
        }
      }
