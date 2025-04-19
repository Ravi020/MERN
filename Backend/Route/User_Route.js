let exp = require("express")
let r = exp.Router();
let User_Logic = require("../Controller/User_Logic")

r.post("/Save",User_Logic.register);

module.exports = r;