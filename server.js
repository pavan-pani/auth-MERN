const express=require('express')
const mongoose=require('mongoose')
const controllers=require('../auth-app/backend/controller/authcontroller')
const jwt=require('jsonwebtoken')
const cors=require('cors')

// const DB=process.env.DB
const DB="mongodb+srv://pavan:pavan@cluster0.avsecbw.mongodb.net/JWTauth?retryWrites=true&w=majority"
 mongoose.connect(DB).then(()=>{
    console.log('DB is connected...!');
 })

const app=express()
app.use(express.json())
app.use(cors({origin:"*"}))


app.post('/login', controllers.login)
app.post('/register',controllers.reqister)
app.get('/myprofile', controllers.protecterRouter, controllers.profile)

app.listen(3000, ()=>console.log('Server is running...'))