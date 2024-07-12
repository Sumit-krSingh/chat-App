const express = require("express");
require("dotenv").config();
const authRoute = require("./router/auth-router")


const app = express();
const PORT = process.env.PORT || 5000;

// app.get("/", (req, res) =>{
//     res.send("hello World sumit is king");

// });

app.use("/api/auth", authRoute);

app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`)
});