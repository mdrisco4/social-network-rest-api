// import MongoStore from 'connect-mongo';

const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");


dotenv.config();


// mongoose.connect(
//     process.env.MONGO_URL,{ 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true }, 
//     () => {
//     console.log("Connected to MongoDB");
// });


mongoose.connect(process.env.MONGO_URL, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch(err => {
    console.error("Error connecting to MongoDB:", err);
});





//MIDDLEWARE

app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get("/",(req,res)=>{
    res.send("welcome to homepage")
})




app.listen(8800, () => {
    console.log("backend server is running!");
  });



