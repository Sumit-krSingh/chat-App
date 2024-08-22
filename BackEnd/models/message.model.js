const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    senderId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },

    receiverId :{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        require: true
    },
    message :{
        type: "String",
        require: true
    }
}, 
// to save data of sender and receiver and their message as well
// createdAt, updatedAt field added
{timestamps: true});

const Message = new mongoose.model("Message", messageSchema);

module.exports = Message;
