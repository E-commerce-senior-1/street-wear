const express = require('express');
const router = express.Router();
const product = require('../Controller/product');

router.get("/all", product.getAll);

router.get("/:catg", product.getCat);

router.get('/:minPrice/:maxPrice', product.filterbyPrice);

module.exports = router;