const express = require("express");
require("dotenv").config();
const cookieParser =require("cookie-parser");

const authRoute = require("./router/auth-router");
const messageRoute = require("./router/message-router");
const userRoute = require("./router/user-router");


const connectDb = require("./db/connectToMongo");
const {app, server} = require("./socket/socket.js")


// const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) =>{
//     res.send("hello World sumit is king");

// });
 app.use(express.json());
 app.use(cookieParser());
//  cookieParse used to verfiy jwt store in brower

app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);
app.use("/api/users", userRoute);



server.listen(PORT, () =>{
    connectDb();
    console.log(`server is running on ${PORT}`)
});