const mongoose = require("mongoose");


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    image: {
        data: Buffer,
        contentType: String,
    },
    email: {
        type: String,
        required: true,
    },
    type:{
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true
    }
});


module.exports = mongoose.model("User", userSchema);
