const router = require("express").Router();

router.get("/",(req,res)=>{
    res.send("welcome to auth routes")
})
// app.get("/users",(req,res)=>{
//     res.send("welcome to user page")
// })

module.exports = router