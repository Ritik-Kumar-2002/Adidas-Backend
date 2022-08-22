const express = require("express");

const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
    ProductName: { type: String, required: true},
    ProductPrice: { type: String, required: true},
    ProductImage: { type: String, required: true},
    ZoomImage: {type: String, required: true},
    ProductType: { type: String, required: true},
    Gender: { type: String, required: true},
    ProductDetail : { type: String, required: true},
    Division: { type: String, required: true},
    Size: { type: String, required: true},
    color: { type: String, required: true},
    discount : { type: String, required: true},
    brand: { type: String, required: true},
    collections: { type: String, required: true},
});