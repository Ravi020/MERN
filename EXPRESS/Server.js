let exp = require("express");
let r = require("./Route/router");
let db = require("./connection");
require("dotenv").config();

let app = exp();

// use routing file
app.use("/Raviha", r);

db().then(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server started at http://localhost:${process.env.PORT}`);
    });
}).catch((e) => {
    console.log(e);
});