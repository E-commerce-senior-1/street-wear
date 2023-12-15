const express = require("express");
const router = express.Router();
const { makearticl,getbyId, deletearticl,getArticle } = require("../Controller/cart");
router.get("/getusers/:id", getbyId);    
router.get("/getone/:id",getArticle)
router.post("/post", makearticl); 
router.delete("/delete/:id/:idPro", deletearticl); 




module.exports = router;
