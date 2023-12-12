const express = require('express')
const router = express.Router()
const product=require('../Controller/product')

router.get("/all", product.getAll);

router.get("/:catg", product.getCat);

router.get("/price/:prc", product.getPrice)



module.exports = router