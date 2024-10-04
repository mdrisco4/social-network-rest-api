const router = require("express").Router();
const User = require("../models/User")
// router.use(express.json())


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