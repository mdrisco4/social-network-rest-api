// const router = require("express").Router();
// const User = require("../models/User")


// router.get("/",(req,res)=>{
//     res.send("welcome to auth routes")
// })

// REGISTER

// router.get("/register", async (req, res) => {
//     const user = await new User({
//         username:"John",
//         email:"john@gmail.com",
//         password:"123456"
//     })

//     await user.save();
//     res.send("OK")
// });


// router.post("/register", async (req, res) => {
//     const user = new User({
//         username:"John",
//         email:"john@gmail.com",
//         password:"123456"
//     });

//     try {
//         await user.save();
//         res.status(201).send("User registered successfully");
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).send("Error saving user");
//     }
// });


const router = require("express").Router();
const User = require("../models/User")


router.post("/register", async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
    })

    try {
        const user = await newUser.save();
        res.status(201).json(user); // Use 201 Created
    } catch (err) {
        console.error(err); // Log the error
        res.status(500).json({ message: "Error saving user" }); // Send a response on error
    }
});












module.exports = router;