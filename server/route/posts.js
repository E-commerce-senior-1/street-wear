const express = require('express')
const router = express.Router()
const {getAllPosts} = require('../Controller/posts')

router.get("/Profile/Posts/:idartist" , getAllPosts)

module.exports = router