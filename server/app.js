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
const authRouter = require("./route/user.js");


app.use("/", authRouter);













// 
// for Ameur

const Controllercart= require("./route/cart.js");
const ControllerfavList= require("./route/favList.js");
app.use("/api/cart",Controllercart)
app.use("/api/favlist",ControllerfavList)










// 
// for Hassan

const artistRoutes = require("./route/artist.js")
app.use("/api/artist" , artistRoutes)




const postsRoutes = require("./route/posts.js")
app.use("/api/posts" , postsRoutes)









//
// for Aziz
const brandRoutes = require("./route/brands.js")
app.use("/api/Brand" , brandRoutes)
const questionRoutes = require("./route/question.js")
app.use("/api/Question" , questionRoutes)














// 


app.listen(port, () => console.log(`Listening on port ${port}`));