const mongoose = require("mongoose");

const connection= mongoose.connect("mongodb://localhost:27017/adidasbackend").
then(()=> console.log("connection successfully establish"))
.catch((error)=> console.log("connection failed ", error))


