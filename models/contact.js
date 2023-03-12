const mongoose = require('mongoose')
const ContactSchema = new mongoose.Schema({
    title:{
        type:String,
        requird:true,
    },
    seotitle:{
        type:String,
        
    },
    metadscription:{
        type:String,
    
    },
    description:{
        type:String
    }
})
module.exports = mongoose.model("Contact",ContactSchema);