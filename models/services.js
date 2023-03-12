const mongoose = require('mongoose')

const servSechema = new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Title Require"]
    },
    seotitle:{
        type:String,
        minlength:[10,"Seo Title Require minimim 10 Characters"],
        maxlenght:[265, "Seo Title no more than 265 Characters"]
    },
    metadescription:{
        type:String,
        minlength:[10,"Seo Title Require minimim 10 Characters"],
        maxlenght:[265, "Seo Title no more than 265 Characters"]
    },
    description:{
        type:String,
        minlength:[10,"Seo Title Require minimim 10 Characters"],
        maxlenght:[2000, "Seo Title no more than 265 Characters"]
    }

})

const ServicesSchema = mongoose.model('service',servSechema);
module.exports = ServicesSchema
