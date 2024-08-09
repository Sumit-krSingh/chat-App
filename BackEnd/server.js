const express = require("express");
require("dotenv").config();
const authRoute = require("./router/auth-router");
const messageRoute = require("./router/message-router");

const connectDb = require("./db/connectToMongo");


const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) =>{
//     res.send("hello World sumit is king");

// });
 app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/messages", messageRoute);


app.listen(PORT, () =>{
    connectDb();
    console.log(`server is running on ${PORT}`)
});