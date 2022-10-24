
const express= require("express");
require("./connections/connections")
const UserAuth = require("./Controller/authUser.controller");
const login = require("./Controller/login.controller");

const product = require("./Controller/ProductController");

// router.use("./Controller/authUser.controller", router);
const app= express();
app.use(express.json())

app.get("/", (req, res)=> {
    res.send("Adidas Backend is running on the port 3001")
})
const PORT = process.env.PORT || 3001;

app.use("/user",UserAuth);
app.use("/login",login);
app.use("/product", product);
app.listen(PORT, ()=> {
    console.log("local host is running on port 3001")
})