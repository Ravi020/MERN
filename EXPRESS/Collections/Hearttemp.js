let mongo = require("mongoose");
let Hearttemp = mongo.Schema({
    BP:{
        type:Number,
        required: true
    },
    Heartrate:{
        type: Number,
        required: true
    },
    Sugar:{
        type:Number,
        required: true
    },
    Colestrol:{
        type: Number,
        required: true
    },
    created_at:{
        type:Date,
        default:Date.now
    }

})
module.exports = mongo.model("HealthRecord",Hearttemp )