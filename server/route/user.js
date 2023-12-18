const express = require("express");
const router = express.Router();
const authController = require("../Controller/user/signup");


router.post("/signup/:role", authController.signup);


router.post("/signin/:role", authController.signin);

module.exports = router;
