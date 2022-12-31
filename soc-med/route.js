const express = require('express');
const app = express();

// Controller Javascript Files
const main = require('./controller/main');
const user = require('./controller/user');
const account = require('./controller/account');
const { checkAuth, isAuth, isAdmin} = require('./controller/session.js');

// Login Page
app.get('/', checkAuth, main.loadLogin);
app.post('/verify', user.userVerification);

// Main/Home Page
app.get('/home', isAuth, main.loadHome);

// Logout
app.get('/Logout', isAuth, user.logoutuser);

// Register Page
app.get('/Register', isAdmin, main.loadRegister);
app.post('/createuser', isAdmin, user.createuser);

// Social Media Account List
app.get('/SM-List', isAuth, account.loadList);
app.get('/RegisterAccount', isAdmin, account.loadRegister);
app.post('/createaccount', isAdmin, account.addAccount);
app.post('/account', isAdmin, account.loadEditAccount);
app.post('/editAccount', isAdmin, account.editAccount);
app.post('/removeAccount', isAdmin, account.removeAccount);

module.exports = app;