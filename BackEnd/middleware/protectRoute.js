const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const protectRoute = async(req, res,next) =>{
    try {
        const token = req.cookies.jwt;

        if(!token){
            return res.status(401).json({error: "unathorized- no token provided"})
        }

        const decoded = jwt.verify(token,process.env.JWT_SECRETKEY);

        if(!decoded){
           return res.status(401).json({error: "unathorised- token invalide"});
        }

        const user = await User.findById(decoded.userId).select("-password");

        if(!user){
            return res.status(401).json({error: "no user found"});
        }
        req.user = user;
        next();
        
    } catch (error) {
        console.log("error in protectRoute middleware", error.message);
        res.status(500).json({error: "internal server error"});
        
        
    }

}


module.exports = {protectRoute}