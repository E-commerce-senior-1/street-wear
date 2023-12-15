module.exports = (sequelize, DataTypes) => {
    const products = sequelize.define("products", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          price: {
            type: DataTypes.INTEGER,
            allowNull: false,
          },
          category: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          picture: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
          },
          description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          // liked:{
          //   type: DataTypes.BOOLEAN,
          //   defaultValue : false
          // },
          isNew: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          },
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          }
    });
  
    return products;
  };