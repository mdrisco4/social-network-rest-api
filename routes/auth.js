const router = require("express").Router();
const User = require("../models/User")


// router.get("/",(req,res)=>{
//     res.send("welcome to auth routes")
// })

// REGISTER

router.get("/register", async (req, res) => {
    const user = await new User({
        username:"John",
        email:"john@gmail.com",
        password:"123456"
    })

    await user.save();
    res.send("OK")
});





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