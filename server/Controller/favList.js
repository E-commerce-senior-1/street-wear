const db = require("../DataBase/index");
const { addfavelist, deletefavlist } = require("../DataBase/index");

module.exports = {
  addfavelist: async (req, res) => {
    try {
      const { idusers, idprducts } = req.body;

      const newfavorite = await db.favlist.create({
        idusers,
        idprducts,
      });
      res
        .status(200)
        .json({ message: "favelise added successfully", result: newfavorite });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },

  deletefavlist: async (req, res) => {
    const { iduser, idprod } = req.params;
    try {
      const deletedArticle = await db.favlist.destroy({
        where: { idusers: iduser, idprducts: idprod },
      });
      res.status(200).json("deletefavlist", deletedArticle);
    } catch (err) {
      res.status(400).json(err);
    }
  },
};
