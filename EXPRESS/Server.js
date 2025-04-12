let exp = require("express");
let r = require("./Route/router");
let db = require("./connection");
let User_Model = require("./Collections/User Model");
let Personal_Record = require("./Collections/Personal Record");
let Hearttemp = require("./Collections/Hearttemp");
require("dotenv").config();

let add_data_for_user_model = async function(){
    try{
        User_Model.create({
            name:"Raviha",
            email:"raviha@gmail.com",
            password:"123",
            gender:"female",
            age:20,
            address:"abc"
        })
        console.log("successfully")
    }catch(error){
        console.log(error)
    }
}

let add_data_for_personal_record = async function(){
    try{
        Personal_Record.create({
            Height:5.0,
            BMI:40,                                                                                                                                     
            Weight:35,
            Category:"Fat"
        })
        console.log("successfully")
    }catch(error){
        console.log(error)
    }
}

let add_data_for_hearttemp = async function(){
    try{
        Hearttemp.create({
           BP:35,
           Heartrate:79,
           Sugar:48,
           Colestrol:87
        })
        console.log("successfully")
    }catch(error){
        console.log(error)
    }
}

let app = exp();
app.use(exp.json())

// use routing file
app.use("/Raviha", r);


db().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
}).catch((e) => {
    console.log(e);
});