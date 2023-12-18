const db = require("../../DataBase/index")
module.exports = {
  signup: async (req, res) => {
  let table;
  if (req.params.role === "artist") {
    table = db.artist;
  } else {
    table = db.users;
  }
  console.log(req.params.role)
  try {
    const { name, email, dateOfBirth, phoneNum } = req.body;
    const user = await table.findAndCountAll({ where: { email } });
    if (user.count) {
      return res.status(409).send("userAlreadyExist");
    }
    const newUser = await table.create({
      name,
      email,
      dateOfBirth,
      phoneNum,
      // Exclude the 'id' field if it doesn't exist in your table
    });
    return res.status(200).json(newUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error");
  }
},

  signin: async (req, res) => {
    try {
      let table;
      if (req.params.role === "artist") {
        table = db.artist;
      } else {
        table = db.users;
      }
      const user = await table.findOne({ where: { email: req.body.email } });
      if (!user) {
        return res.status(409).send("userDoesNotExist");
      }
      const { id, name, email } = user;
      return res
        .status(200)
        .json({ message: "Signin successful", user: { id, name, email } });
    } catch (err) {
      console.error(err);
      res.status(500).send("Error");
    }
  },
};