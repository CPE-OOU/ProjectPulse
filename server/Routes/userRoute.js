const  express = require("express");
const { userUploadDoc, userUploadImg, userProfile,  getUsers, getImage, getDocs} = require("../Controllers/userController.js");
const uploadImg = require("../utils/multerImg.js");
const uploadDoc = require("../utils/multerDoc.js");


const router = express.Router();


router.route("/userProfile/:userId").get(userProfile);

router.route("/getUsers").get(getUsers);

router.post("/:userId/uploadImg", uploadImg.single("file"), userUploadImg);

router.post("/:userId/uploadDoc", uploadDoc.single("file"), userUploadDoc);

router.get("/:userId/getImage", getImage);

router.get("/getDocs", getDocs);



module.exports = router;
