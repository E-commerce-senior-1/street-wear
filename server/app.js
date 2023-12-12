const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const db = require("./DataBase/index")
// db.sequelize.sync({alter : true})
app.use(cors())
app.use(express.json())

// for Ahmed














// 
// for Raje














// 
// for Ameur
















// 
// for Hassan

















//
// for Aziz
















// 


app.listen(port, () => console.log(`Listening on port ${port}`));