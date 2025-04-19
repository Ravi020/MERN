let express = require("express");
let db_var = require('./Database')
let ro = require('./Route/User_Route')
let cors = require("cors")
require("dotenv").config();

let port_no = process.env.PORT

let myapp = express();

myapp.use(cors())
myapp.use(express.json())
myapp.use("/gymfit/",ro)

db_var().then(()=>{
    myapp.listen(port_no,()=>{
        console.log(`Server started at http://localhost:${port_no}`)
    })
}).catch((e) => {
    console.log(e)
})
