const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const db = require("./DataBase/index")
const routeProd=require("./route/products")

// db.sequelize.sync({alter : true})

app.use(cors())
app.use(express.json())

// for Ahmed

app.use('/api/product',routeProd)

// app.use('/api/product/catg',routeProd)











// 
// for Raja




















// 
// for Ameur
















// 
// for Hassan

















//
// for Aziz
















// 


app.listen(port, () => console.log(`Listening on port ${port}`));