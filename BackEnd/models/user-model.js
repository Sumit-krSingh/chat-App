const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    fullName:{
        type: String,
        require: true,
    },
    username :{
        type: String,
        require: true,
        unique:true,
    },

    password :{
        type: String,
        require :true,
        minlength : 6,
    },

    gender :{
        type : String,
        enum : ["male", "female"],
        require : true,
    },

    profilePic: {
        type: String,
        default: " ",
    }



});

({timestamps: true});


const User = new mongoose.model("Signup", userSchema);

module.exports = User;