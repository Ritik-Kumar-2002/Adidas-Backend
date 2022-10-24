
const express = require("express");
const Router = express.Router();

const AuthUser = require("../entity/authUserModel");


// ---------------------- || USER LOGIN API || -------------------------
// ---------------------- || URL IS : /login/islogin || -------------------------

Router.post("/islogin",async (req, res)=> {

    const email = req.body.email;
    const password = req.body.password;

    try{
        const islogin = await AuthUser.find({"email": req.body.email});

        // console.log("is login is ", islogin);
        if(islogin.length !== 0){
            if(password === islogin[0].password){
                res.status(200).send(islogin);
            }else{
                res.status(400).send("Invalid password");
            }
           
        }else{
            res.status(400).send("Invalid Credential")
        }
    }catch(error){
        res.status(500).send(error)
    }
})


// --------------------- || FORGOT PASSWORD API || -----------------------


module.exports = Router;