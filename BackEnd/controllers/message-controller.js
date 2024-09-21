const { Promise } = require("mongoose");
const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
const { getReceiverSocketId,io } = require("../socket/socket.js");
const sendMessage = async (req, res) => {
    try {
        const { message } = req.body;
        const { id: receiverId } = req.params;
        const senderId = req.user._id;

        let conversation = await Conversation.findOne({
            participants: { $all: [senderId, receiverId] },
        });

        if (!conversation) {
            conversation = await Conversation.create({
                participants: [senderId, receiverId]
            });
        }

        const newMessage = new Message({
            senderId,
            receiverId,
            message,
        });

        if(newMessage){
            conversation.messages.push(newMessage._id);
        }

        await conversation.save();
        await newMessage.save();
        //  above conversation and message save run not parallel

        
        // above code is for save parallely to both
        // await Promise.all([conversation.save(), newMessage.save()]);
        
        // code for socket io 

        const receiverSocketId = getReceiverSocketId(receiverId);
        if(receiverSocketId){

            // io.to is used to send event to specific client not all client
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in message send", error.message);
        res.status(500).json({ error: "internal error message" })

    }
}

// function for get message from conversaton
const getMessage = async (req, res) =>{
    try {
        const {id:userToChatId} = req.params;
        const senderId = req.user._id;

        const conversation = await Conversation.findOne({
            participants:{$all :[senderId, userToChatId]},
        }).populate("messages"); // this is for get message only

        if(!conversation) return res.status(200).json([]);

        res.status(201).json(conversation.messages);
        
    } catch (error) {
        console.log("error in get message", error.message);
        res.status(500).json({error:" internal server error"})
        
        
    }
}

module.exports = { sendMessage, getMessage }