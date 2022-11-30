const utc = require('dayjs/plugin/utc')
const timezone = require('dayjs/plugin/timezone')
const knex = require('../database/postsdatabase.js')
const dayjs = require('dayjs')
const { kStringMaxLength } = require('buffer')
dayjs.extend(utc)
dayjs.extend(timezone)

// important topics: philosophy, technology, biology, politics, 
const AddPost = async (req, res, next) => {
  console.log(dayjs().format('DD-MM-YYYY ss:mm:hh'))
  
  knex('posts').insert({
    'title': req.body['title'],
    'time added': dayjs().format('DD-MM-YYYY ss:mm:hh'),
    'author': req.body['author'],
    'subject': req.body['subject'],
    'content': req.body['content']
  }).then(() => {
    console.log(`Added new post title ${req.body['title']}`)
  }).catch(err => {
    throw(`Problem adding post title ${req.body['title']} ` + err)
  })
}

const GetPosts = async (req, res, next) => {
  knex.select('*').from('posts')
    .then(data => res.send(data))
}

const GetPost = async (req, res, next) => {
  knex('posts').where({id: req.params.id})
    .then(data => {res.send(data); console.log(data)})
}

const AddComment = async (req, res, next) => {
  knex('comments').insert({
    'id': req.body['id'],
    'content': req.body['content'],
    'author': req.body['author'],
    'time added': dayjs().format('DD-MM-YYYY ss:mm:hh')
  }).then (() => {console.log(`Added new comment on post id ${req.body['id']}`)})
    .catch(error => {throw(error)})
}

const GetPostComments = async (req, res, next) => {
  knex('comments').where({id: req.params.id})
  .then(data => {res.send(data); console.log(data)})
}

const DeletePostComment = async (req, res, next) => {
  knex('comments').where({
    'id': req.body.id,
    'author': req.body.author,
    'time added': req.body['time added']
  }).del()
    .then(() => {res.send('Comment deleted'); console.log('comment deleted')})
    .catch(error => {console.log(req.body.id + req.body.author + req.body['time added']); throw(error); })
}   

const DeletePost = async (req, res, next) => {
  knex('posts').where({
    'id': req.body.id
  }).del()
    .then(() => {res.send('Post deleted'); console.log('post deleted')})
    .catch(error => {console.log('deleted post'); throw(error)})
}

const Ping = async (req, res, next) => {
  res.send("this backend")
  //res.status(200).json({message: `Hi this is the backend`})
}
module.exports = {
  AddPost,
  Ping,
  GetPosts,
  GetPost,
  AddComment,
  GetPostComments,
  DeletePostComment,
  DeletePost
}