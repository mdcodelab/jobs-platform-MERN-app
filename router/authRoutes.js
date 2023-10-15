const express = require("express");
const router=expressRouter();
const {register, login, authUser}=require("../controllers/authController");

router.route("/register").post(register);
router.route("/login").post(login);
router.route("/updateUser").patch(authUser);

module.exports=router;