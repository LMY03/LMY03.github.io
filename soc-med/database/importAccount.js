const mongoose = require('mongoose');

//For Localhost MongoDB
mongoose.connect("mongodb://localhost/Soc-Meds");

//For Cloud Mongo Atlas
// mongoose.connect(process.env.MONGODB_URI); //MongoDB Atlas

const Account = require('./model/Account');

async function run() {
    try{
        const acc_1 = await Account.create({
            media: "Twitter",
            username: "Main_Twt",
            password: "Main_Twt_123"
        });
        await acc_1.save();
        console.log('created ' + acc_1);
        
        const acc_2 = await Account.create({
            media: "Twitter",
            username: "Isports_Twt",
            password: "Isports_Twt_123"
        });
        await acc_2.save();
        console.log('created ' + acc_2);
        
        const acc_3 = await Account.create({
            media: "Instagram",
            username: "APP_IG",
            password: "APP_IG_123"
        });
        await acc_3.save();
        console.log('created ' + acc_3);
        
        const acc_4 = await Account.create({
            media: "Website",
            username: "admin@plaridel.ph",
            password: "17dq9l8u!K4zU(UUR!"
        });
        await acc_4.save();
        console.log('created ' + acc_4);

        const acc_5 = await Account.create({
            media: "Website",
            username: "pidel",
            password: "%yZ5ek9Q660wKKg(F7U8e5a2"
        });
        await acc_5.save();
        console.log('created ' + acc_5);

        const acc_6 = await Account.create({
            media: "Website",
            username: "Devep",
            password: "VmWb8t&tJSJtvq6eV!Y6s7&g"
        });
        await acc_6.save();
        console.log('created ' + acc_6);
    } catch(e) {
        console.log(e.message);
    }
}
run();