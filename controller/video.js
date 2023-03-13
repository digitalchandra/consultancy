const VideoModule = require('../models/videos')


const createVideo = async(req,res)=>{
   try{
    const video = await VideoModule.create(req.body)
    res.json(video)
   }catch(error){
       res.send("somthing error occored during video post create")
   }
}


const returnVideo = async(req,res)=>{
    try{
        const video = await VideoModule.find()
        res.json(video)
    }catch(error){
        res.send("Somthing error coccored during the Video post")
    }
}

const getSingleVideo = async (req,res)=>{
    const {videoId} = req.params;
    try{
        const getvideo = await VideoModule.findById(videoId)
        res.json(getvideo)
    }catch(error){
        res.send("Somthing error occored during the singl vide return")
    }
}

const updateVideo = async (req,res)=>{
    const {videoId} = req.params;
    try{
        const updatevideo = await VideoModule.findByIdAndUpdate(videoId, req.body,{new:true})
        res.json(updatevideo)
    }catch(error){
        res.send("somthing error occored during the video")
    }
}

const deleteVideo = async (req,res)=>{
    const {videoId} = req.params;
    try{
        const deletevideo = await VideoModule.findByIdAndDelete(videoId)
        res.json(deletevideo)
    }catch(error){
        res.send("somthing error occored during the video delete")
    }
}

module.exports={createVideo, getSingleVideo, returnVideo, updateVideo, deleteVideo}