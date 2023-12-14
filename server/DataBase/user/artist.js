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
<<<<<<< HEAD
     
=======
>>>>>>> f96fedd1e1d226292af021ee990516fa7ef53730
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
      createdAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      },
      updatedAt: {
        type: DataTypes.DATE,
        defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
      }

    });
  
    return artist;
  };