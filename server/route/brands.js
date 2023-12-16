const express = require('express')
const { createBrand, getBrands } = require('../Controller/brand')
const router = express.Router()

router.post("/Create",createBrand)
router.get("/getBrand",getBrands)


module.exports = router