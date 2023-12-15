const express = require('express')
const router = express.Router()
const {getUserData , addPost , updateName , updateEmail , updateBio , updatePfp , updateCoverPic} = require("../Controller/user/artist")

router.get("/Profile/:email" , getUserData )
router.post("/Profile/Post/:idartist" , addPost )
router.put("/Profile/Name/:id" , updateName)
router.put("/Profile/Email/:id" , updateEmail)
router.put("/Profile/Bio/:id" , updateBio)
router.put("/Profile/ProfilePic/:id" , updatePfp)
router.put("/Profile/CoverPic/:id" , updateCoverPic)

module.exports = router