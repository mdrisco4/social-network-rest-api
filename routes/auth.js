const router = require("express").Router();
const User = require("../models/User")


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


router.post("/register", async (req, res) => {
    const user = new User({
        username:"John",
        email:"john@gmail.com",
        password:"123456"
    });

    try {
        await user.save();
        res.status(201).send("User registered successfully");
    } catch (error) {
        console.error("Error saving user:", error);
        res.status(500).send("Error saving user");
    }
});



// router.post("/register", async (req, res) => {
//     const user = new User({
//         username: req.body.username || "John", // For testing
//         email: req.body.email || "john@gmail.com", // For testing
//         password: req.body.password || "123456", // For testing
//     });

//     try {
//         console.log("Attempting to save user:", user);
//         await user.save();
//         console.log("User saved successfully");
//         res.send("OK");
//     } catch (error) {
//         console.error("Error saving user:", error);
//         res.status(500).send("Error saving user");
//     }
// });



// router.post("/register", async (req, res) => {
//     res.send("OK")
// });





// router.post("/register", async (req,res)=>{
//     try {

//         const newUser = new User({
//             username: "John",
//             email: "john@gmail.com",
//             password: "123456"
//         });
    
//         const user = await newUser.save();
//         res.status(200).json(user);
//     } catch (err) {
//     res.status(500).json(err)
//     }

// });







module.exports = router;