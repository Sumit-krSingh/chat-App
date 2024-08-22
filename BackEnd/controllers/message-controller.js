const { Promise } = require("mongoose");
const Conversation = require("../models/conversation.model");
const Message = require("../models/message.model");
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

        // await Promise.all([conversation.save(), newMessage.save()]);

        // above code is for save parallely to both

        res.status(201).json(newMessage)

    } catch (error) {
        console.log("error in message send", error.message);
        res.status(500).json({ error: "internal error message" })

    }
}

module.exports = { sendMessage }