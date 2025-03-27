var exp = require("express");
var r = require("./Route/router");

var app = exp()
app.use("/",r)

app.listen(3002,()=>{
    console.log(`Server started at http://localhost:3002`)
});