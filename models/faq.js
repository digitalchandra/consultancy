const mongoose = require('mongoose')

const faqSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        minlenght:[10,"title minimum 10 characters"],
        maxlenght:[250,"title no  more 250 characters"]
    },
    description:{
        type:String,
        minlenght:[10,"description minimim 10 characters"],
        maxlenght:[1000,"description no more 1000"]
    }
})

const FaqModule = mongoose.model('faq',faqSchema)
module.exports = FaqModule