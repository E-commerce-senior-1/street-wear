module.exports = (sequelize, DataTypes) => {
    const favList = sequelize.define("favList", {
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      }
    });
  
    return favList;
  };