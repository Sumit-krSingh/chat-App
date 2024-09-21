const {Server} = require("socket.io");
const http = require('http');
const express = require ("express")



const app = express();

const server = http.createServer(app);
const io = new Server(server, {
    cors:{
        origin:["http://localhost:5000"],
        methods:["GET","POST"],
    },
});

const getReceiverSocketId = (receiverId) =>{
    return userSocketMap[receiverId];
}

const userSocketMap = {};

io.on('connection', (socket) =>{
    console.log("user connect through socket", socket.id);

    const userId = socket.handshake.query.userId;

    if(userId !== "undefined") userSocketMap[userId] = socket.id;

    // io.emit is used to send event to all connect client

    io.emit("getOnlineUsers",Object.keys(userSocketMap));

    socket.on('disconnect', () =>{
        console.log("disconnect user", socket.id);
        delete userSocketMap[userId];
    io.emit("getOnlineUsers",Object.keys(userSocketMap));

        
    });
})



 module.exports ={app, io, server,getReceiverSocketId}
