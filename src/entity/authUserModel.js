//  USER SCHEMA 
const mongoose = require("mongoose");
const validate   = require("validator")

const AuthUserSchema = mongoose.Schema({
    firstName: {type: String, required : true},
    lastName: {type: String, required: true},
    phone: {type:Number, required: true },
    email: {
        type: String, 
        required: true, 
        unique:[true, "Email Id Already Present"],
        validate(value){
            if(!validate.isEmail(value)){
                throw new Error("InValid Email")
            }
        }
    },
    password: {type: String, required: true},
    isDeleted: {type:Boolean, required : true, default: false},
});

const AuthUser =  mongoose.model("AuthUser", AuthUserSchema);

module.exports= AuthUser;