let func = require("../Logics_functions/controller");

let express = require("express");
let route = express.Router();

route.get("/", func.Index);
route.get("/about", func.About);
route.get("/contact", func.Contact);

module.exports = route;