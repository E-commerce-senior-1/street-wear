const db = require("../DataBase/index");
const { addfavelist, deletefavlist } = require("../DataBase/index");

module.exports = {
  addfavelist: async (req, res) => {
    try {
      const { idusers, idproducts } = req.body;

      const newfavorite = await db.favlist.create({
        idusers,
        idproducts,
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
