const multer = require("multer");
const path =require("path");


const storage = multer.diskStorage({
        destination: function(req, file, cb){
            cb(null, "../uploads")
        },
        filename : function(req, file, cb){
            cb(null, Date.now() + path.extname(file.originalname));
        }
    });

const fileFilter = (req, file, cb) => {
    
    const allowedFileTypes = /img|jpg|jpeg|png/;
    const extname = allowedFileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowedFileTypes.test(file.mimetype);

    if(mimetype && extname){
        return   cb(null, true);
    } else{
        cb(null, false);
    }
}

module.exports = multer({
            storage, fileFilter, limits: {
                fileSize: 1024 * 1024 * 5
            }

        })
