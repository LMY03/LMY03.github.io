const mongoose = require('mongoose');

//For Localhost MongoDB
mongoose.connect("mongodb://localhost/Soc-Meds");

//For Cloud Mongo Atlas
// mongoose.connect(process.env.MONGODB_URI); //MongoDB Atlas

const User = require('./model/User');

async function run() {
    try{
        const user_1 = await User.create({
            username: "IT38_Seked",
            password: "70c8b9d57a11532f0e0e85d1924b04f9",
            iv: "UTAyOym23hDHLGjCpWcISQ=="
        });
        await user_1.save();
        console.log('created ' + user_1);

    } catch(e) {
        console.log(e.message);
    }
}
run();