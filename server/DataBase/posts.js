module.exports = (sequelize, DataTypes) => {
    const posts = sequelize.define("posts", {
        description: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          picture: {
            type: DataTypes.TEXT('long'),
            allowNull: false,
          },
    });
  
    return posts;
  };