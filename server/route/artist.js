const express = require('express')
const router = express.Router()
const {getUserData , addPost , updateName} = require("../Controller/user/artist")

router.get("/Profile/:email" , getUserData )
router.post("/Profile/Post/:idartist" , addPost )
router.put("/Profile/Name/:idartist" , updateName)

module.exports = router