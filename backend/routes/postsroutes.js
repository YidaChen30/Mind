const express = require('express')
const router = express.Router()

const {
  AddPost,
  Ping
} = require('../controllers/postscontroller.js')

router.get('/ping', Ping)
router.post('/addpost', AddPost)

module.exports = router