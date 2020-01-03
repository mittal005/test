const mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
    user_name: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    deleted: {
        type: Boolean,
        default: false,
    }
}, { timestamps: true });

var user = mongoose.model('user', userSchema);

module.exports = user;