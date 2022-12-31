const Account = require('../database/model/account');
const User = require('../database/model/user');

const crypto = require("./crypto.js");

const account = {
    // Render Account List
    loadList: async function(req, res) {
        var username = req.session.username;
        Account.find({ role: username }, function(err, rows) {
            if (err) {
                console.log(err);
            } else {
                res.render('accList', {
                    username: username,
                    list: rows
                });
            }
        });
    },

    // Render Register page
    loadRegister: async function(req, res) {

        const userDetails = await User.find({ username: { $nin: ["IT38_Seked", "Top3"] }}); // Create user object

        res.render('create_acc', { userDetails });
    },

    loadEditAccount: async function(req, res) {

        const userDetails = await User.find({ username: { $nin: ["IT38_Seked", "Top3"] }}); // Create user object

        Account.findOne({ media: req.body.media, username: req.body.username }, function(err, account) {

            res.render('edit_acc', {
                userDetails,
                hasAccess: account.role,
                media: account.media,
                username: account.username,
                password: crypto.decryption(account.iv, account.password)
            });
        });
    },

    addAccount: async function(req, res) {
        // Get Values
        var media = req.body.mediaInput;
        var username = req.body.usernameInput;
        var userPassword = req.body.passwordInput;
        var access = ["IT38_Seked", "Top3"];
        if (req.body.user) 
            access = ["IT38_Seked", "Top3", ...req.body.user];
        

        // Password encryption
        const arr = crypto.encryption(userPassword);
        var password = arr[0];
        var iv = arr[1];
        
        // Create user to be placed inside MongoDB
        Account.create({
                media: media,
                username: username,
                password: password, 
                iv: iv, 
                role: access },
            function(err) {
            if(err) {
                console.log("Register Failed");
                req.flash('errorMsg', 'REGISTER FAILED');
                res.redirect('/RegisterAccount');
            }
            else {
                console.log("Register Success");
                res.redirect('/RegisterAccount');
            }
        });
    },

    editAccount: async function(req, res) {

        // Get value
        const arr = crypto.encryption(req.body.passwordInput);
        var password = arr[0];
        var iv = arr[1];
        var access = ["IT38_Seked", "Top3"];
        if (req.body.user) 
            access = ["IT38_Seked", "Top3", ...req.body.user];

        Account.updateOne(
            { media: req.body.media, username: req.body.username}, 
            { $set: { password: password, iv: iv, role: access }}, 
            function(err, result) {
                if(result) {
                    console.log("Account successfully updated");
                    res.redirect('/SM-List');
                }
                else if(err) {
                    console.log(err);
                    req.flash('errorMsg', 'UPDATE FAILED');
                    res.redirect('/SM-List');
                }
        }); 
    },

    removeAccount: async function(req, res) {
        Account.findOneAndRemove({ media: req.body.media, username: req.body.username }, function(err) {
            if (err) {
                console.log(err);
                res.redirect('/SM-List')
            } else {
                console.log('deleted')
                res.redirect("/SM-List");
            }
        });
    }
}

module.exports = account;