const express = require('express')
const mongoose = require('mongoose')

const connectDB =()=>{
    mongoose.connect(process.env.MANGODB_CONNECTION_STRING,(err)=>{
       if(err){
           console.log(err)
       }else{
           console.log("database connected successfully")
       }
    });
    

}
module.exports = connectDB;