const { default: mongoose } = require('mongoose')
const ServicesSchema = require('../models/services')
const { editBlog } = require('./blog')

const createServices = async (req,res)=>{
    try{
        const services = await ServicesSchema.create(req.body)
        res.json(services)
    }catch(error){
        res.send("Some error occored during the Services Create")
    }
}

const getServices = async (req,res)=>{
    try{
        const getserv = await ServicesSchema.find()
        res.json(getserv)
    }catch(error){
        res.send("some error during the all services resturn")
    }
}

const getSingleSerivice = async (req,res)=>{
    const {servicesId} = req.params;
    try{
        const singleSerives = await ServicesSchema.findById(servicesId)
        res.json(singleSerives)
    }catch(error){
        res.send("sone error occored during the singel product return")
    }

}

const updateServices = async (req,res)=>{
    const {servicesId} = req.params
    try{
        const eidtService = await ServicesSchema.findByIdAndUpdate(servicesId, req.body,{new:true})
        res.json(eidtService)
    }catch(error){
        res.send("some error occored during the service update")
    }

}

const deleteService = async (req,res)=>{
    const {servicesId} = req.params;
    try{
        const servicesDelete = await ServicesSchema.findByIdAndDelete(servicesId)
        res.json(servicesDelete)

    }catch(error){
        res.send("some error occored during the services delete")
    }
}

module.exports={createServices,getServices,getSingleSerivice,updateServices,deleteService}