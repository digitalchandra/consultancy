const ProductSchema = require('../models/product')

const createProduct = async (req,res)=>{
    // console.log(req.body)
    try{
        const product = await ProductSchema.create(req.body)
        res.json(product)
    }catch(error){
        res.send("somthing error occored during product create !!")
    }
}

const returnAllProduct = async (req,res)=>{
    // console.log(req.body)
    try{
        const productReturn = await ProductSchema.find()
        res.json(productReturn)
    }catch(error){
        res.send("somthing error occored during the return product")
    }
}

const returnSingleProduct = async (req,res)=>{
    const {productId} = req.params;
    try{
        const resurnProduct = await ProductSchema.findById(productId)
        res.json(resurnProduct)
    }catch(error){
        res.send("somthing error during single product return")
    }
}

const updateProduct = async(req,res)=>{
    const{productId} =req.params;
    try{
        const updateProduct = await ProductSchema.findByIdAndUpdate(productId, req.body,{new:true})
        res.json(updateProduct)
    }catch(error){
        res.send("somthing error occored ducring product update")
    }
}

const deleteProduct = async (req,res)=>{
    // console.log(req.body)
    const {productId} = req.params;
    try{
        const productDelete = await  ProductSchema.findByIdAndDelete(productId)
        res.json(productDelete)
    }catch(error){
        res.send("somthing error occored during product Delete")
    }
}
module.exports={returnAllProduct, returnSingleProduct,createProduct,updateProduct,deleteProduct}