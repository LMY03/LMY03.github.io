const User = require('../database/model/user');

const crypto = require("./crypto.js");

const user = {
    // Function for verifying user
    userVerification: async function(req, res) {
        // Get value from / or Login Page
        var getuserName = req.body.username;
        var getPassword = req.body.password;
        
        var loginuser = await User.findOne({ username: getuserName }); //Find user and create user object
        
        //Find user if user exists
        User.findOne({ username: getuserName }, 
            function(err, user) {
                if(err) {
                    console.log(err);
                    res.redirect('/');
                }
                else{
                    if(user) { //If user exists
                        //Decrypt user password and compare if the password is correct
                        if(crypto.decryption(loginuser.iv, loginuser.password) === getPassword) {
                            req.session.username = getuserName; // Send session
                            console.log(req.session);
                            console.log("Login Successful");
                            res.redirect('/Home');
                        }
                        else{
                            console.log("Invalid Login");
                            req.flash('errorMsg', 'INVALID LOGIN');
                            res.redirect('/');
                        }
                    }
                    else{ //If user does not exist
                        console.log('username not found');
                        req.flash('errorMsg', 'userNAME NOT FOUND');
                        res.redirect('/');
                    }
                }
            });
    },
    
    // Function for logging out user
    logoutuser: function(req, res) {
        if(req.session) { //If session exists
            req.session.destroy(()=>{ //Destroy current session
                res.clearCookie('connect.sid'); //Clear cookie data
                res.redirect('/'); //Return to login screen
            });
        }
    },

    // Function for creating user
    createuser: async function(req, res) {
        // Get values that were sent from /Register
        var username = req.body.username;
        var userPassword = req.body.password;
        
        // Find username
        var checkusername = await User.findOne({username : username});
        
        // If username already exists then error
        if(checkusername !== null) {
            req.flash('errorMsg', "userNAME ALREADY EXISTS");
            res.redirect('/Register');
        }
        // If username does not exist 
        else {
            // Password encryption
            const arr = crypto.encryption(userPassword);
            var password = arr[0];
            var iv = arr[1];
            
            // Create user to be placed inside MongoDB
            User.create({
                    username: username,
                    password: password, 
                    iv: iv},
                function(err) {
                if(err) {
                    console.log("Register Failed");
                    req.flash('errorMsg', 'REGISTER FAILED');
                    res.redirect('/Register');
                }
                else {
                    console.log("Register Success");
                    res.redirect('/Register');
                }
            });
        }   
    }
}

module.exports = user;