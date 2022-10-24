const Products = require("../entity/ProductModel");
const express = require("express");
const Router = express.Router();


// ---------------- || URL IS /product/addproduct || ------------------
// URL IS :  product/addproduct

Router.post("/addproduct", async (req, res)=>{
    console.log("req of the body data is ", req.body)
    try{
        var product = new Products(req.body);
        var data = await product.save();
        res.status(200).send(data);
    }catch (error){
        res.status(400).send(error);
    }
})

// -------------------- || GET ALL PRODUCTS API || ----------------------
// URL IS : product/products
Router.get("/products", async (req, res)=>{
    
    try{
        // console.log("product is ", Products.find());
        const AllProducts = await Products.find();
        console.log("all products is ", AllProducts);
        res.status(200).send(AllProducts);
    }catch (error) {
        res.status(400).send(error);
    }
})

// -------------------- || GET PRODUCT BY ID || -------------------------
// URL IS : product/products/:id

Router.get("/products/:id", async (req, res)=>{
    
    try{
        _id = req.params.id;
        // console.log("id is ",_id)
        const Product = await Products.findById(_id);
        if(res.statusCode === 400){
            res.status(400).send("Id Not Found ");
        }else{
            res.status(200).send(Product);
        }
    }catch (error){
        res.status(400).send(error);
    }
})

// -------------------- || UPDATE PRODUCT API || -------------------------
// URL IS :  product/products/:id

Router.put("/products/:id", async (req, res)=>{
  
    try{
        const _id = req.params.id;
        console.log("id is ", _id);
        const UpdatedProduct = await Products.findByIdAndUpdate(_id, req.body);
        res.status(200).send(UpdatedProduct);
    }catch (error){
        res.status(400).send(error);
    }
})


// ---------------------- || DELETE PRODUCT API || -----------------------
// URL IS : product/product/:id

Router.delete("/products/:id", async (req, res)=>{
    try{
        const _id = req.params.id;
        const deletedProduct = await Products.findByIdAndDelete(_id);
        console.log("deleted Product is ", deletedProduct);
        if(deletedProduct === null){
            res.status(400).send("Product Not Found! ");
        }else {
            res.send(deletedProduct);
        }
    }catch (error){
        res.status(400).send(error);
    }
})
module.exports = Router;