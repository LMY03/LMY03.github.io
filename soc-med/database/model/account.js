const mongoose = require('mongoose');

const accSchema = new mongoose.Schema({
    media: {
        type: String, required: true, immutable: true
    },
    username: {
        type: String, required: true, immutable: true
    },
    password: {
        type: String, required: true
    },
    role: {
        type: Array, required: true
    },
    iv: {
        type: String, required: true
    }
});

module.exports = mongoose.model('Account', accSchema);