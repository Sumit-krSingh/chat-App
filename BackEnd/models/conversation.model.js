const mongoose = require("mongoose");

const conversatonSchema = new mongoose.Schema({
    participants :[{
        type: mongoose.Schema.Types.ObjectId,
        ref :"User"
    }],

    messages :[{
        type : mongoose.Schema.Types.ObjectId,
        ref: "Message",
        default: []
    }]
},{timestamps: true});

const Conversation = new mongoose.model("Conversation", conversatonSchema);

module.exports = Conversation;