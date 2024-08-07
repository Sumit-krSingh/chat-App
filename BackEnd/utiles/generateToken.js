const jwt = require("jsonwebtoken");

const generateTokenAndSetCookie = (userId, res) =>{
    const token = jwt.sign({userId}, process.env.JWT_SECRETKEY,{
        expiresIn: '15d'
    }) 

    res.cookie("jwt",token,{
        maxAge :15* 24 *60 *60  *1000, 
        // convert in milisec

        httpOnly: "true",
        sameSite: "strict",  
        // prevent and secure from external attack
    })
}

module.exports = generateTokenAndSetCookie;