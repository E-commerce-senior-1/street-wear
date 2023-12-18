const express = require('express')
const { createQuestion ,getQuestion} = require('../Controller/question')
const router = express.Router()

router.post("/Ask",createQuestion)
router.get("/getQ",getQuestion)


module.exports = router