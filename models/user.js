const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name:{
        type: String,
        require:[true,'please enter a name'],
        unique:true,
    },
    email:{
        type:String,
        require:[true, 'please enter a email address'],
        unique: true,
       
    },
    password:{
        type:String,
        require:[true,'please enter a password'],
        minlenght:[6,"password should be a 6 characer"]

    }  
    // profilePic:{
    //     type:String,
    //     default: "",

    // }
},
    {
        timestamps:true
    }
)

const User = mongoose.model('User',userSchema)
module.exports = User;