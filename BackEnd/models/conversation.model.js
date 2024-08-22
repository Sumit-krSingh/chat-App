const mongoose = require("mongoose");

const conversatonSchema = new mongoose.Schema({
    participants :[{
        type: mongoose.Schema.Types.ObjectId,
        ref :"User"
    }],
    // to save id of sender and receiver

    messages :[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    }]
    // to save recode of message with message id
},{timestamps: true});

const Conversation = new mongoose.model("Conversation", conversatonSchema);
// to save data in conversation collection in mongodb

module.exports = Conversation;