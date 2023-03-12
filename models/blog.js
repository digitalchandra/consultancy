const mongoose = require('mongoose')

const blogSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        minlength: [10,"Title lenght should be more than 10 characters"],
        maxlenght: [250,"The Title lenth not more than 250 characters "]
    },
    seotitle:{
        type:String,
        minlength: [30,"Title lenght should be more than 10 characters"],
        maxlenght: [250,"The Title lenth not more than 250 characters "]
    },
    metadescription:{
        type:String,
        minlength: [10,"Title lenght should be more than 10 characters"],
        maxlenght: [350,"The Title lenth not more than 250 characters "]
    },
    description:{
        type:String,
        minlength: [10,"Title lenght should be more than 10 characters"],
        maxlenght: [1000,"The Title lenth not more than 250 characters "]
    }
})
const BlogModule = mongoose.model('blogpost',blogSchema)
module.exports = BlogModule