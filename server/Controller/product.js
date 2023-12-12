const db = require("../DataBase/index");
const { Op } = require("sequelize");

module.exports = {
    getAll  :async (req, res) => {
        try {
          const allProducts  = await db.products.findAll();
      
          if (allProducts.length > 0) {
            res.status(200).send(allProducts);
          } else {
            res.status(200).send([]);
          }
        } catch (err) {
          console.error(err);
          res.status(500).send("Internal Server Error");
        }
      },

      getCat :async (req,res)=>{
        const catg= req.params.catg
        console.log(catg);
         try{
            const allcat = await db.products.findAll({where:{category:catg}});
            if (allcat.length > 0) {
                res.status(200).send(allcat);
              } else {
                res.status(200).send([]);
              }
         }
         catch(err){
            console.error(err);
            res.status(400).send(err);
         }
      },

      getPrice: async (req, res) => {
        const { prc } = req.params;
        try {
          const allprice = await db.products.findAll({ where: {price: { [Op.lt]: 100} }, });
          if (allprice.length > 0) {
            res.status(200).send(allprice);
          } else {
            res.status(200).send([]);
          }
        } catch (err) {
          console.error(err);
          res.status(400).send(err);
        }
    }
}
