const db = require("../DataBase/index");




module.exports = {



  getfanList: async (req, res) => {
    try {
      const articleId = req.params.id;
      const article = await db.products.findAll({
        include: {
          model: db.cart,
          where: { id: articleId },
        },
      });
      if (!article) {
        return res.status(404).json({ error: "favolist not found" });
      }
      res.status(200).json(article);
    } catch (err) {
      console.error(err);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },




  deletefavlist: async (req, res) => {
    const { id, idPro } = req.params;
    console.log(id,idPro);
    try {
      const deletedCount = await db.favlist.destroy({
        where: { idusers: id, idproducts: idPro },
      });

      if (deletedCount > 0) {
        res.status(200).json({ message: "favlist deleted successfully", deletedCount });
      } else {
        res.status(404).json({ message: "favelist not found or already deleted" });
      }
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  },
  
};
