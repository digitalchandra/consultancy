const mongoose = require('mongoose')

const videoSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Title Required "],
        minlenght:[10,"Title Shoud be minimum 10 characters"],
        maxlenght:[250,"Title Shoud be maximum  250 characters"]
    },
    seotitle:{
        type:String,
        require:[true,"Title Required "],
        minlenght:[10,"Title Shoud be minimum 10 characters"],
        maxlenght:[250,"Title Shoud be maximum  250 characters"]
    },
    meta:{
        type:String,
        require:[true,"Title Required "],
        minlenght:[10,"Title Shoud be minimum 10 characters"],
        maxlenght:[1000,"Title Shoud be maximum  250 characters"]
    },
    link:{
        type:String,
        require:[true,"Title Required "],
        minlenght:[10,"Title Shoud be minimum 10 characters"],
        maxlenght:[250,"Title Shoud be maximum  250 characters"]
    },
        description:{
        type:String,
        require:[true,"Title Required "],
        minlenght:[10,"Title Shoud be minimum 10 characters"],
        maxlenght:[1000,"Title Shoud be maximum  250 characters"]
    }
})
const VideoSchema = mongoose.model('video',videoSchema)
module.exports = VideoSchema;