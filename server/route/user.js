const express = require("express");
const router = express.Router();
const Controller = require("../Controller/user/user");

// Create a new user
router.post("/signup/:role", Controller.signup);

// Signin
router.post("/signin/:role", Controller.signin);

module.exports = router;
