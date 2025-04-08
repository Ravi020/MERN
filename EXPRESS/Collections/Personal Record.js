let mongo = require("mongoose");
let Personal_Record = mongo.Schema({
    Height:{
        type:Number,
        required: true
    },
    BMI:{
        type:Number,
        required: true
    },
    Weight:{
        type:Number,
        required: true
    },
    Category:{
        type:String,
        required: true
    },
    created_at:{
        type:Date,
        default:Date.now
    }
})
module.exports = mongo.model("PersonalDetail",Personal_Record )
