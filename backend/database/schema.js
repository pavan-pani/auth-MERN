const mongoose=require('mongoose')

const registerSchema=mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    confirmPassword:{
        type:String,
        required:true
    },
})

const userReg=mongoose.model('userReg',registerSchema)

module.exports=userReg