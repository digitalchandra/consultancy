const { resetWatchers } = require('nodemon/lib/monitor/watch')
const SliderModule = require('../models/slider')

const createSlider = async (req,res)=>{
   
    try{
        const slider = await SliderModule.create(req.body)
        res.json(slider)
    }catch(error){
        res.send("some error occored during the slider create")
    }
}

const returnSlider = async(req,res)=>{
    try{
        const returnallslider = await SliderModule.find()
        res.json(returnallslider)

    }catch(error){
        res.send("Some error occored during the return slider")
    }
}

const returnSingleSlide = async(req,res)=>{
    const {sliderId} = req.params
    try{
        const returnsingleslider = await SliderModule.findById(sliderId)
        res.json(returnsingleslider)
    }catch(error){
        res.send("Some error occored during single slider return")
    }
}

const updateSlider = async(req,res)=>{
    const{sliderId} = req.params
    try{
        const updateslider = await SliderModule.findByIdAndUpdate(sliderId, req.body,{new:true})
        res.json(updateslider)
    }catch(error){
        res.send("some error occored during the update slider")
    }
}

const deleteSlider = async (req,res)=>{
    const {sliderId} = req.params
    try{
        const deleteslider = await SliderModule.findByIdAndDelete(sliderId)
        res.json(deleteslider)
    }catch(error){
        req.send('some error occored duting the sldier delete')
    }
}

module.exports={createSlider,returnSlider,returnSingleSlide,updateSlider,deleteSlider}