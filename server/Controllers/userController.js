const multerImg = require("../models/fileModel.js");
const upload = require("../models/fileModel.js");
const fs = require("fs");

const User = require("../models/userModel.js");

exports.userUploadDoc = async (req, res) => {
    try {

        const userId = req.params.userId;
        const user = await User.findById(userId);
        if(!user){
            res.status(404).json("User not found");
        }
        const { author, abstract,  title, uploadedBy } = req.body;
        const { mimetype, filename, path } = req.file;
       await multerImg.create({ userId: userId,  filePath: path, title: title, uploadedBy: uploadedBy, author: author, abstract: abstract, fileName: filename, fileType: mimetype });
        
        res.status(200).json({
            status: "success",
            message: "docments uploaded successfully",
        });
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}


exports.userProfile = async(req, res) => {
   try {
    const userId = req.params.userId;
    const user = User.findById(userId);
    if(!user){
        res.status(404).json("User not found");
    }    
    res.status(200).json({
        status: "success",
        data: {
            User: user
        }
    });
    
   } catch (error) {
    res.status(500).json(error.message);
    
   }
};


exports.getUsers = async(req, res) => {
   try {
    const users = User.find();   
    res.status(200).json({
        status: "success",
        data: {
            User: users
        }
    });
    
   } catch (error) {
      res.status(500).json(error.message);
   }
};

exports.userUploadImg = async(req, res) => {
    try {

        const { filename } = req.file;

        const id = req.params.userId;
        
        const user = await User.findById(id);

        if(!user){
            res.status(404).json("User not found");
        }
        
        user.image = null;
        
        user.image = {
            data: filename,
            contentType: "image/png",
        };

       await user.save({ validateBeforeSave: false });
        
        const {password:pass, ...others} = user._doc;
        res.status(200).json({
            status: "success",
            message: "image uploaded successfully",
            data: {
                user: others
            }
        });
        
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getImage = async(req, res) => {
    try {
        const id = req.params.userId;
        const user = await User.findById(id);

        if(!user){
            res.status(404).json("User not found");
        }
        
        const {password:pass, ...others} = user._doc;
        res.status(200).json({
            status: "success",
            message: "image fetched  successfully",
            data: {
                user: others
            }
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
}

exports.getDocs = async (req, res) => {
    try {
        const files = upload.find();
        const docs = await files;
        res.status(200).json({
            status: "success",
            data: {
                docs: docs
            }
        });
    } catch (error) {
        res.status(500).json(error.message);
    }
} 