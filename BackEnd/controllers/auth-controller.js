
const home = async (req, res) =>{
    try {
        res.status(200).send("welcome to home page of chat_app");
        
    } catch (error) {

        console.log(error)
        
    }

};

module.exports= {home};