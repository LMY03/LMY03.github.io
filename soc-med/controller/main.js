const main = {
    // Render Login Page
    loadLogin: async function(req, res) {
        res.render('login');
    },
    
    // Render Home page
    loadHome: async function(req, res) {
        res.render('home', { username: req.session.username });
    },

    // Render Register Page
    loadRegister: async function(req, res) {
        res.render('create_user');
    },
}

module.exports = main;