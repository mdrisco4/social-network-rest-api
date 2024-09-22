const express = require("express");
const app = express();
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const userRoute = require("./routes/users")
const authRoute = require("./routes/auth")


dotenv.config();


// mongoose.connect(
//     process.env.MONGO_URL,{ 
//         useNewUrlParser: true, 
//         useUnifiedTopology: true }, 
//     () => {
//     console.log("Connected to MongoDB");
// });


mongoose.connect(
    process.env.MONGO_URL, 
    )
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

app.use("/api/users", userRoute);
app.use("/api/auth", authRoute);




app.listen(8800, () => {
    console.log("backend server is running!");
  });



