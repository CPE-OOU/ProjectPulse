const  User = require("../models/userModel.js");
const  bcryptjs = require("bcryptjs");
const  jwt = require("jsonwebtoken");

exports.createUser = async (req, res) => {
   try {
    // console.log(req.body);
    
    const { username, email, type, password } = req.body;

  
    const existingUser = await User.findOne({ email });
    if (existingUser) {
        return res.status(400).json("User already exists");
    }

    const hashedPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, type, password: hashedPassword });
    // console.log(newUser);
    
    await newUser.save({ validateBeforeSave: false });
    res.status(200).json("successfully created user");

   } catch (error) {
    res.status(500).send(error.message);
   }
}

exports.userLogin = async (req, res) => {
    try {
        const { username, password } = req.body;

        if (!username || !password || username === "" || password === "") {
            return res.status(400).json("All fields are required");
        }
        const existingUser = await User.findOne({ username });  
        if (!existingUser) {
            return res.status(404).json("User not found");
        }       

        const isPasswordCorrect = bcryptjs.compareSync(password, existingUser.password);
        if (!isPasswordCorrect) {
            return res.status(400).json("Invalid credentials");
        }

        const token = jwt.sign({id:existingUser._id}, process.env.JWT_SECRET);
        const { password: pass, ...others } = existingUser._doc

        res.status(200)
        .cookie("token", token, {
            httpOnly: true,
        })
        .json(others);
    } catch (error) {
        res.status(500).json(error.message);
    }
}

// const updateAbout = async (req, res) => {
//     try {
        
//     } catch (error) {
//         res.status(500).json(error.message);
//     }
// }