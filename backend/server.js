const express = require('express')
const cors = require('cors');
const port = 6161

const app = express()

// app.get('/', (req, res) => {
//   res.send("Hello world")
// })

const routes = require('./routes/index.js')

app.use(cors())
app.use(express.json())

app.use(routes)

app.listen(port, () => {
  console.log(`Backend listening on port ${port}`)
})