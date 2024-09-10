const bcrypt = require("bcryptjs")
const User = require("../models/user-model");
const generateTokenAndSetCookie  = require("../utiles/generateToken");
const home = async (req, res) => {
    try {

        // const {username, fullname, password, confirmPassword, gender} = req.body;
        res.status(200).send("please signup to access chat_app");

    } catch (error) {

        console.log(error);

    }
}
const signup = async (req, res) => {
    try {
        // res.status(200).send("welcome to hoome page of chat_app");

        const { fullName, username, password, gender, confirmPassword } = req.body;

        if (password !== confirmPassword) {
            return res.status(400).json({ error: "password dont match" })
        }
        const user = await User.findOne({ username });

        if (user) {
            return res.status(400).json({ error: "user already exits" });
        }
        // hashing the password
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);
        //  https://avatar-placeholder.iran.liara.run/


        const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`
        const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`


        const newUser = new User({
            fullName,
            username,
            password: hashedPassword,
            gender,
            profilePic: gender === "male" ? boyProfilePic : girlProfilePic

        });

        if (newUser) {
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                fullName: newUser.fullName,
                username: newUser.username,
                profilePic: newUser.profilePic,
            });
        }
        else {
            res.status(400).json({ error: "invalid user data" });
        }


    } catch (error) {

        console.log("error in signup", error.message);
        res.status(500).json({ error: "internal server error" })

    }

};
const login = async (req, res) => {
    try {

        const { username, password} = req.body;
        const user = await User.findOne({username});
        const ispasswordCorrect = await bcrypt.compare(password, user?.password || "");

        if(!user || !ispasswordCorrect){
             return res.status(400).json({error : "invalide credentials"})
        }
        else{
            generateTokenAndSetCookie(user._id, res);

            res.status(200).json({
                _id: user._id,
                fullName: user.fullName,
                username: user.username,
                profilePic: user.profilePic

            });

        }


    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).json({ error: "internal server error" })


    }
};

const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", {maxAge: 0});
        res.status(200).json({messaage:"logout successfully"});

    } catch (error) {
        console.log("error in login", error.message);
        res.status(500).json({ error: "internal server error" })

    }
}


module.exports = { home, signup, login, logout };