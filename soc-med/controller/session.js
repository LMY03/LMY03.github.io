const user = require('./user');

exports.checkAuth = function(req, res, next) {
    if (req.session.username) { //If there is session go to /Home
        res.redirect('/home');
    }
    else { //If there is no session
        return next(); //Jump out of the callback
    }
};

exports.isAuth = function(req, res, next) {
    if (req.session.username) { //If there is session
        return next(); //Jump out of the callback
    }
    else { //If there is no session go back to login page
        res.redirect('/');
    }
};

exports.isAdmin = function(req, res, next) {
    if (req.session.username === "Top3" || req.session.username === "IT38_Seked") {
        return next();
    }
    else {
        console.log("No Admin Priviges");
        res.redirect('/');
    }
}