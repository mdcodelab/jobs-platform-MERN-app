const express = require("express");
const router=express.Router();
const {register, login, updateUser}=require("../controllers/authController");
const authenticateUser=require("../middleware/authenticateUser")

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authenticateUser, updateUser);

module.exports=router;