const db = require("../DataBase/index")
module.exports = {
    getAllPosts : async (req , res) => {
        let {idartist} = req.params
        try {
            const data = await db.posts.findAll({where : {idartist}})
            res.status(200).json(data)
        }catch(err) {
            console.log(err)
            res.status(404).send(err)
        }
    }
    
}