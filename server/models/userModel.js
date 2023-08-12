const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'A user must have a name'],
        unique: true,   
        trim : true,
        maxlength: [40, 'A user name must have less or equal then 40 characters'],
    },
    email: {
        type: String,
        required: [true, 'A user must have a email'],
        unique: true,
        trim : true,
    },
});

module.exports = mongoose.model('User', userSchema);
