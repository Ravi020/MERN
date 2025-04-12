const UserModel = require("../Collections/User Model");

let Functions = {

 Home : async function (req, res) {
    res.send("Home Page");
    res.end();
},

 Contact : async function (req, res) {
    res.send("Contact Page");
    res.end();
},
Feedback : async function (req, res) {
    res.send("Feedback Page");
    res.end();
},
Help : async function (req, res) {
    res.send("Help Page");
    res.end();
},
Faqs : async function (req, res) {
    res.send("Faqs Page");
    res.end();
},
PrivacyPolicy : async function (req, res) {
    res.send("PrivacyPolicy Page");
    res.end();
},
save_data: async function (req,res) {
    try {
        console.log("Received Data:",req.body);
        let user_give_data = new UserModel (req.body)
        let saving = await user_give_data.save()
        res.status(200).json({msg: "Data Saved Successfully",data:saving});
    } catch (error) {
        console.log(error)
        res.status(500).json({msg: error.message});
    }
}

}
module.exports = Functions