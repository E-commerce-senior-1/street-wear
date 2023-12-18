const db = require("../DataBase/index");
const { Op } = require("sequelize");



const filterPrice = (minPrice, maxPrice, callback) => {
  db.products
    .findAll({
      where: {
        price: {
          [Op.between]: [minPrice, maxPrice],
        },
      },
    })
    .then((results) => {
      callback(null, results);
    })
    .catch((error) => {
      callback(error, null);
    });
};

module.exports = {
  getAll: async (req, res) => {
    try {
      const allProducts = await db.products.findAll();

      if (allProducts.length > 0) {
        res.status(200).send(allProducts);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send(err);
    }
  },

  getCat: async (req, res) => {
    const catg = req.params.catg;
    console.log(catg);
    try {
      const allcat = await db.products.findAll({ where: { category: catg } });
      if (allcat.length > 0) {
        res.status(200).send(allcat);
      } else {
        res.status(200).send([]);
      }
    } catch (err) {
      console.error(err);
      res.status(400).send(err);
    }
  },

  filterbyPrice: (req, res) => {
    const minPrice = req.params.minPrice;
    const maxPrice = req.params.maxPrice;
  
    console.log(`Received request with minPrice: ${minPrice}, maxPrice: ${maxPrice}`);
  
    filterPrice(minPrice, maxPrice, (err, results) => {
      if (err) {
        console.error(err, "Error filtering by price");
        res.status(500).json({ error: 'Error filtering by price' });
      } else {
        res.json(results);
      }
    });
  },
};