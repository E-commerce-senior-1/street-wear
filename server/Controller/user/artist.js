const db = require("../../DataBase/index")

module.exports = {
getUserData : (req , res) => {
    let {email} = req.params
    try {
        const data = db.artist.findAll({ where : {email}})
         res.status(200).json(data)
    }catch(err) {
        console.log(err)
        return res.status(404).send(err)
    }
},

addProduct : (req , res) => {
    let {name , price , category , picture , description , idbrand} = req.body
    let {idartist} = req.params
    try{
        if(!(name && price && category && picture && description && idartist && idbrand)) res.status(400).send("All inputs are required")
        db.products.create({name , price , category , picture , description , idartist , idbrand})
        res.status(201).send("Product added successfully")
    }catch (err) {
        console.log(err)
        res.status(500).send(err)
    }
},

addPost : (req , res) => {
    let {description , picture} = req.body
    let {idartist} = req.params
    try {
        if(!(description&& picture)) res.status(401).send("All inputs are required")
        db.posts.create({description , picture, idartist})
    res.status(201).send("Post added successfully")
    }catch(err) {
        console.log(err)
        res.status(400).send(err)
    }
},

updateName : (req , res) => {
    let {name} = req.body
    let {id} = req.params
    try {
        if(!name) res.status(401).send("All inputs are required")
        db.artist.update({name} , {where : {id}})
        res.status(200).send("Updated!")
    }catch (err){
        console.log(err)
        res.status(404).send(err)
    }
},
updateEmail : (req , res) => {
let {email} = req.body
let {id} = req.params
try{
    if(!email) res.status(401).send("All inputs are required")
    db.artist.update({email} , {where : {id}})
    res.status(200).send("Updated!")
}catch (err) {
    res.status(404).send(err)
}
},
updateBio : (req , res) => {
    let {bio} = req.body
    let {id} = req.params
    try{
        if(!bio) res.status(401).send("All inputs are required")
        db.artist.update({bio} , {where : {id}})
        res.status(200).send("Updated!")
    }catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
},
updatePfp : (req , res) => {
    let {profilePic} = req.body
    let {id} = req.params
    try{
        if(!profilePic) res.status(401).send("All inputs are required")
        db.artist.update({profilePic} , {where : {id}})
    res.status(200).send("Updated!")
    }catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
},
updateCoverPic : (req , res) => {
    let {coverPic} = req.body
    let {id} = req.params
    try {
        if(!coverPic) res.status(401).send("All inputs are required")
        db.artist.update({coverPic} , {where : {id}})
        res.status(200).send("Updated!")
    }catch (err) {
        console.log(err)
        res.status(404).send(err)
    }
},

    
}