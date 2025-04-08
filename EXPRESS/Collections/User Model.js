let mongo = require("mongoose");
let User_Model = mongo.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    gender:{
        type: String,
        required: true
    },
    age:{
        type:Number,
        required: true
    },
    address:{
        type: String,
        required: true,
        unique: true
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongo.model("Users",User_Model )