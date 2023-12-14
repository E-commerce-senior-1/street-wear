module.exports = (sequelize, DataTypes) => {
    const user = sequelize.define("user", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          password: {
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