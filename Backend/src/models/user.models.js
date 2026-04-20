const mongoose = require('mongoose');
const userchema = new mongoose.Schema({nom: String, prenom: String, email: { type: String, unique: true}, password: String}, {timestamps: true});

module.exports = mongoose.model('user', userchema);