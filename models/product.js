const mongoose = require('mongoose')

const ShemaProduct = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Title is Reqired"]
    },
    description:{
        type:String,
        minlength:[10,"description minimum 10"],
        maxlenght:[1000,"Max lenght 10000"]
    },
    price:{
        type:Number,
    },
    cagetory:String
})

const ProductSchema = mongoose.model('product',ShemaProduct);
module.exports = ProductSchema;