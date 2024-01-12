const mongoose = require("mongoose");
var Schema = mongoose.Schema;
const bcrypt = require('bcryptjs');
const jwt_secret = process.env.JWT_SECRET;
const jwt_expire = process.env.JWT_EXPIRE;

const UserSchema = new Schema({
    username:{
        type: String,
        unique: true,
        required: [true , "Please enter the name"],
        maxlength: [20 , "First Name Length should be less than 20 characters"],
        minlength: [2 , "First Name Length should be greater than 2 characters"]
    },
    password:{
        type: "String",
        required: [true , "Please enter a password"],
        minlength: [],
        select: true,
    },
    createdAt:{
        type: Date,
        default: Date.now,
    },
    resetPasswordToken: String,
    resetPasswordExpire: Date,
}, {timeStamps: true});


const user = mongoose.model('User' , UserSchema);
module.exports = user;