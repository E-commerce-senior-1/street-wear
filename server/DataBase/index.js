const { Sequelize, DataTypes } = require("sequelize");

//Created a Sequelize instance and passed the appropriate parameters separately,
//database, user and password fields coming from the config files.
const sequelize = new Sequelize("estreetcommerce", "root", "ahmed", {
  host: "localhost",
  dialect: "mysql",
});

//Create and export a db object which holds the sequelize models,
//with the respective associations.
const db = {};

db.sequelize = sequelize;
db.Sequelize = Sequelize;

db.users = require("./user/user.js")(sequelize, DataTypes); //require the user model
db.artist = require("./user/artist.js")(sequelize, DataTypes); //require the artist model
db.posts = require("./posts.js")(sequelize, DataTypes); //require the posts model
db.products = require("./products.js")(sequelize, DataTypes); //require the product model
db.brand = require("./brands.js")(sequelize, DataTypes); //require the brand model
db.cart = require("./cart.js")(sequelize, DataTypes); //require the cart model
db.questions = require("./question.js")(sequelize, DataTypes); //require the question model
db.favlist = require("./favList.js")(sequelize, DataTypes); //require the favlist model

db.users.hasMany(db.cart, {
  foreignKey: "idusers",
});
db.users.hasMany(db.favlist, {
  foreignKey: "idusers",
});
db.users.hasMany(db.questions, {
  foreignKey: "idusers",
});
db.artist.hasMany(db.products, {
  foreignKey: "idartist",
});
db.artist.hasMany(db.posts, {
  foreignKey: "idartist",
});
db.products.hasMany(db.cart, {
  foreignKey: "idproducts",
});
db.products.hasMany(db.favlist, {
  foreignKey: "idproducts",
});
db.brand.hasMany(db.products, {
  foreignKey: "idbrand",
});


module.exports = db;
