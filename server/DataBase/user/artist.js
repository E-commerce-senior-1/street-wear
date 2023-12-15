module.exports = (sequelize, DataTypes) => {
    const artist = sequelize.define("artist", {
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
      bio: {
        type: DataTypes.STRING,
      },
      profilePic: {
        type: DataTypes.TEXT('long'),
      },
      coverPic: {
        type: DataTypes.TEXT('long'),
      },
     
    });
  
    return artist;
  };