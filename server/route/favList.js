const express = require('express')
const router = express.Router()
const { addfavelist,deletefavlist} = require("../Controller/favList.js");


router.post("/post", addfavelist)
router.delete("/delete/:id/:idPro", deletefavlist)


module.exports = router