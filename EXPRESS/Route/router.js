let func = require("../Logics_functions/controller");

let express = require("express");
let route = express.Router();

route.get("/", func.Home);
route.get("/contact", func.Contact);
route.get("/feedback", func.Feedback);
route.get("/help", func.Help);
route.get("/faqs", func.Faqs);
route.get("/privacypolicy", func.PrivacyPolicy);
route.post("/save",func.save_data)

module.exports = route;