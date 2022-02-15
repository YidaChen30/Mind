const express = require('express')
const app = express()
const port = 6161

app.get('/', (req, res) => {
  res.send("Hello world")
})

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})