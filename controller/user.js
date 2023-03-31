const User = require('../models/user')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const aysncHandler = require('express-async-handler')
const { Error } = require('mongoose')

// Register New Users 
// route : /users
// access : Public 


const registerUser = aysncHandler (async(req,res)=>{
    const {name,email,password} = req.body
    if(!name || !email || !password){
        res.status(400)
        throw new Error('pelase add all fields')
    }
   //Check Users 
   
   const userExists = await User.findOne({email})
    if(userExists){
        res.status(400)
        throw new Error('user already exits ')
    }

    // Has Password 
    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
        name,
        email,
        password : hashPassword
    })
    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email
        })
    }else{
        res.status(400)
        throw new Error('Invilade User Data ')
    }
    res.json({message: 'User Registerd Successfully '})
})

const loginUser = async (req,res) =>{
    res.json({message: 'login User'})
}

const getMe = async (req,res)=>{
    res.json({message: 'get me'})
}


module.exports = {registerUser, loginUser,getMe }