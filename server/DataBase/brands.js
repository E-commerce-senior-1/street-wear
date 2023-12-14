module.exports = (sequelize, DataTypes) => {
    const brand = sequelize.define("brand", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          picture: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
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
  
    return brand;
  };