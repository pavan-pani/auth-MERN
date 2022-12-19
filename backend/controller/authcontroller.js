const userReg=require('../database/schema')
const jwt=require('jsonwebtoken')

const reqister=async (req,res)=>{
    try{
        const {email, password, confirmPassword}=req.body

        let existUser=await userReg.findOne({email})
        if(existUser){
            return res.status(400).send("User alredy exists")
        }
        if(password!==confirmPassword){
            return res.status(400).send("Password Mismatch")
        }
        let newUser=new userReg({
            email, password, confirmPassword
        })

        await newUser.save()
        res.status(200).send("user registred succesfully...!")
    }
    catch(err){
        res.send(500).json({
            message:err.message
        })
    }
}


const login=async (req,res)=>{
    try{
        const {email, password}=req.body

        let existUser=await userReg.findOne({email})
        if(!existUser){
            return res.status(400).send("Your Not Found")
        }
        if(password!==existUser.password){
            return res.status(400).send("Invalid credentials")
        }
        //jwt.sign(payload, key, {expiresIn:3600000000}, response)
        let payload={
            user:{id:existUser._id}
        }
        jwt.sign(payload, "PAVAN_JWT_KEY", {expiresIn:"2d"},(err, token)=>{
            if(err) return err
            return res.json({token})
        })
    }
    catch(err){
        res.send(500).json({
            message:err.message
        })
    }
}

const protecterRouter=async (req,res, next)=>{
    try{
        let token=req.header('x-token')
        if(!token){
            return res.status(400).send("token not found")
        }
        let decodeToken=jwt.verify(token, "PAVAN_JWT_KEY")
        req.user=decodeToken.user
        next()
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
}

const profile=async (req, res)=>{
    try{
        let existsuser=await userReg.findById(req.user.id)
        if(!existsuser){
            return res.status(400).send("User not found")
        }
        res.json(existsuser)
    }catch(err){
        res.status(400).json({
            message:err.message
        })
    }
    
}

module.exports={reqister, login, protecterRouter, profile}