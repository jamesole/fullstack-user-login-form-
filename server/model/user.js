const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type:String,
        trim:true,
        required:[true]
    },
    email: {
        type:String,
        trim:true,
        required:[true]
    },
    password: {
        type:String,
        trim:true,
        required:[true]
    },

}, {collection:'user-data'});

module.exports = mongoose.model("User", userSchema);
