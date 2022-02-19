const knex = require('../database/postsdatabase.js')

const AddPost = async (req, res, next) => {
  console.log(req)
}

const Ping = async (req, res, next) => {
  res.send("this backend")
  //res.status(200).json({message: `Hi this is the backend`})
}
module.exports = {
  AddPost,
  Ping
}