const mongoose = require("mongoose");


const uploadFileSchema = new mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
        required: true},

    title:{
        type: String,
        required: true
    },
    author:{
        type: String,
        required: true
    },
    uploadedBy:{
        type: String,
        required: true
    },
    abstract:{
        type: String,
        required: true
    },
    fileName:{
        type: String,
        required: true
    },
    filePath:{
        type: String,
        required: true
    },
    fileType: {
        type: String,
        required: true
    },
   
}, {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
});

uploadFileSchema.virtual("users", {
    "ref": "users",
    "localField": "user",
    "foreignField": "_id",
})

module.exports = mongoose.model("Upload", uploadFileSchema);
