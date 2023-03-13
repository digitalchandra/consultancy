const mongoose = require('mongoose')

const SliderSchema = new mongoose.Schema({
    title:{
        type:String,
        require:[true,"Title Required"],
        minlength:[10,"min lenght should be 10"],
        maxlenght:[250,"title should be not more than 250"]
    },
    featureimage:{
        type:String,
        default:""
    },
    description:{
        type:String,
        minlenght:[10,"min lenght should be 10"],
        maxlenght:[1000,"description should be 1000"]
    }

})
const SliderModule = mongoose.model('slider',SliderSchema)
module.exports=SliderModule;
