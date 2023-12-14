const express = require("express");
const router = express.Router();
const { makearticl, getarticl, deletearticl } = require("../Controller/cart");

router.get("/get", getarticl);    
router.post("/post", makearticl); 
router.delete("/delete/:id/:idPro", deletearticl); 




module.exports = router;
