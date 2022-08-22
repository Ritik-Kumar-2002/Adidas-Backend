
const express= require("express");
require("./connections/connections")
var AuthUser = require("./entity/authUserModel");
const UserAuth = require("./Controller/authUser.controller");
const login = require("./Controller/login.controller");
require("./Controller/login.controller");


// router.use("./Controller/authUser.controller", router);
const app= express();
app.use(express.json())

const PORT = process.env.PORT || 3001;

app.use("/user",UserAuth);
app.use("/login",login);

app.listen(PORT, ()=> {
    console.log("local host is running on port 3001")
})