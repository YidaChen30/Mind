const express = require('express')
const router = express.Router()

const {
  AddPost,
  Ping,
  GetPosts,
  GetPost,
  AddComment,
  GetPostComments,
  DeletePostComment,
  DeletePost
} = require('../controllers/postscontroller.js')

router.get('/ping', Ping)
router.post('/addpost', AddPost)
router.get('/getposts', GetPosts)
router.get('/getpost/:id', GetPost)
router.post('/addcomment', AddComment)
router.get('/getcomments/:id', GetPostComments)
router.delete('/deletepost', DeletePost)
router.delete('/deletepostcomment', DeletePostComment)

module.exports = router