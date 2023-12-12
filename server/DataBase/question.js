module.exports = (sequelize, DataTypes) => {
    const questions = sequelize.define("questions", {
        question: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
  
    return questions;
  };