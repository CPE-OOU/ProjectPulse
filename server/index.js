const  express = require("express");
const  cors = require('cors');
const  {connect} = require('mongoose');
const  dotenv = require('dotenv');
const  authRouter = require("./Routes/auth.Route.js");

const  userRouter = require("./Routes/userRoute.js");
const { userLogin } = require("./Controllers/auth.controller.js");



const app = express();

app.use(express.json());
app.use(cors());

dotenv.config()

const url = process.env.MONGO_URL;
const  port = process.env.PORT || 5000;

connect(url)
.then(() => {
    console.log("Database is connected");
})
.catch((err) => {
    console.log("Database not connected please rectify it")
});



app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);


app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});