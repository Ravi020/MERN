let mongoose = require("mongoose");
require("dotenv").config();
let db_url = process.env.URL;

let db_work = async function() {
    try {
        await mongoose.connect(db_url);
        console.log("Database Connected");
    } catch (e) {
        console.log(e);
    }
};

module.exports = db_work;