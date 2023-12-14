module.exports = (sequelize, DataTypes) => {
    const cart = sequelize.define("cart", {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  
    return cart;
  };