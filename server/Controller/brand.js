const db = require("../DataBase/index");
const Brand = db.brand

module.exports = {
  createBrand: async (req, res) => {
    try {
      const { name, picture } = req.body;
      const newBrand = await Brand.create({ name, picture });
      res.status(201).json(newBrand);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
  getBrands: async (req, res) => {
    try {
      const brands = await Brand.findAll();
      res.status(200).json(brands);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  },
};