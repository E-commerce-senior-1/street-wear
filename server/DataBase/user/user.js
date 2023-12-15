module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
     
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      phoneNum: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    });
  
    return user;
  };