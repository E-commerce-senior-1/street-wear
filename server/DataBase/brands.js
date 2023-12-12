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
    });
  
    return brand;
  };