module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
<<<<<<< HEAD
        
=======
>>>>>>> f96fedd1e1d226292af021ee990516fa7ef53730
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
          createdAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          },
          updatedAt: {
            type: DataTypes.DATE,
            defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
          }
  
    });
  
    return user;
  };