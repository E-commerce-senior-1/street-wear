const { makearticl, getarticl, deletearticl } = require("../DataBase/index");
const db = require("../DataBase/index");


module.exports = {
  makearticl: async (req, res) => {
    try {
      const { idusers, idproducts } = req.body;
      console.log(req.body);
      const newArticle = await db.cart.create({
        idusers,
        idproducts,
      });
      res
        .status(200)
        .json({ message: "Article added successfully", result: newArticle });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  getarticl: async (req, res) => {
    try {
      const articles = await db.cart.findAll(); 
      res.status(200).json(articles);
    } catch (err) {
      res.status(400).json(err);
    }
  },

  deletearticl: async (req, res) => {
    const { id, idPro } = req.params;
    console.log(id,idPro);
    try {
      const deletedCount = await db.cart.destroy({
        where: { idusers: id, idproducts: idPro },
      });
  
      if (deletedCount > 0) {
        res.status(200).json({ message: "Article deleted successfully", deletedCount });
      } else {
        res.status(404).json({ message: "Article not found or already deleted" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },
  
};
