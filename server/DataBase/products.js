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
          isNew: {
            type: DataTypes.BOOLEAN,
            defaultValue: true,
          },
          
    });
  
    return products;
  };