const express = require("express");
const app = express();
const port = 3000;
const cors = require("cors")
const db = require('./DataBase/index.js')


// db.sequelize.sync({alter : true})

app.use(cors())
app.use(express.json())


// for Ahmed
const routeProd=require("./route/products")

app.use('/api/product',routeProd)

// app.use('/api/product/catg',routeProd)






// 
// for Raja

const userRoutes = require("./route/user");

app.use("/user", userRoutes);











// 
// for Ameur

const Controllercart= require("./route/cart.js");
const ControllerfavList= require("./route/favList.js");
app.use("/api/cart",Controllercart)
app.use("/api/favlist",ControllerfavList)










// 
// for Hassan

















//
// for Aziz
















// 


app.listen(port, () => console.log(`Listening on port ${port}`));