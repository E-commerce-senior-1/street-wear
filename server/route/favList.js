const express = require('express')
const router = express.Router()
const { getfanList,deletefavlist} = require("../Controller/favList.js");



router.delete("/delete/:id/:idPro", deletefavlist)
router.get("/getfavList/:id",getfanList)


module.exports = router