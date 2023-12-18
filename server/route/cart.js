const express = require("express");
const router = express.Router();

const { makearticl,getbyId, deletearticl,getArticle,getarticl } = require("../Controller/cart");
router.get("/getusers/:id", getbyId);    
router.get("/getone/:id",getArticle)
router.post("/post", makearticl);
router.get("/get",getarticl) 
router.delete("/delete/:id/:idPro", deletearticl); 




module.exports = router;
