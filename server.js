const express = require ('express')
const PORT=4000;
require('dotenv').config();
const mongoose = require("mongoose")
const dbConnection = require('./database/dbConnection')
const useContact = require('./routs/contact')
const productModule = require('./routs/product')
const servicesModule = require('./routs/services')
const videoModule = require('./routs/video')
const useBlog = require('./routs/blog')
const cors = require('cors')
const app = express()

app.use(express.json());
app.use(cors())
dbConnection()

app.use('/contact',useContact)
app.use('/blogposts',useBlog)
app.use('/products',productModule)
 app.use('/services', servicesModule)
app.use('/videos',videoModule)

app.get('/',(req,res)=>{
    res.send("<h3> Blog Site  </h3>")
})
app.get('*',(req,res)=>{
    res.status(404).send("somthing error occored !!")
})

app.listen(PORT,()=>{
    console.log(`Express Server Started at ${PORT}`)
})


