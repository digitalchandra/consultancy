const mongoose = require('mongoose')

const ExamPreparation = new mongoose.Schema({
    title:{
        type:String,
        require:[true,'Title Require'],
        minlenght:[0],
        maxlenght:[250]
    },
    shortdescription:{
        type:String,

    },
    description:{
        type:String,
        minlenght:[0],
    }
})
const TestModule = mongoose.model('exammodule',ExamPreparation)
module.exports=TestModule