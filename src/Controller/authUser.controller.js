const express = require("express");

const router = express.Router();
const AuthUser = require("../entity/authUserModel")

// CREATE USER API 
// URLS IS : /user/createUser
router.post("/createUser", async (req, res)=> {
    try{
        var user =  new  AuthUser(req.body);
        var createUser = await user.save();
        res.status(200).send(createUser);
    }catch(error){
        res.status(400).send(error);
    }
})

// URL IS:  /user/getUsers
// GET ALL USERS API
router.get("/getUsers", async(req, res)=> {
    try{
        const allUser= await AuthUser.find();
        res.status(200).send(allUser);
    }catch(error){
        res.status(400).send(error);
    }
})


// get user by id API
// URL IS /adidas/getUsers/id
router.get("/getUsers/:id",async (req, res)=> {
    try{
        _id= req.params.id;
        console.log('id is ',_id)
        const data = await AuthUser.findById(req.params.id);
        if(!data){
            res.status(400).send("Error! data not found")
        }else{
            res.status(200).send(data);
        }
    }catch(error){
        res.status(400).send(error);
    }
})

// DELETE USER BY ID API 
// URLS IS : user/getUsers/:id
router.delete("/getUsers/:id", async (req, res)=> {
    try{
        const deleteData = await AuthUser.findByIdAndDelete(req.params.id)
        console.log("delete data is ", deleteData);
        if(deleteData === null ){
            res.status(400).send("Data not found");
        }else{
            res.status(200).send(deleteData);
        }
    }catch(error){
        res.status(400).send(error);
    }
})

// UPDATE USER API CREATION 
// url is user/Users/:id
router.put("/Users/:id", async (req, res)=> {
    try{
        _id= req.params.id;
        const updated = await AuthUser.findByIdAndUpdate(_id, req.body);
        if(updated === null){
            res.status(400).send("User Doesn't exist ");
        }else{
            res.status(200).send(updated);
        }
    }catch(error){
        res.status(500).send(error);
    }
})

module.exports = router;