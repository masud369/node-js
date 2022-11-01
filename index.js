const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('welcome to node express!')
})

app.listen(3000, ()=>console.log("Listning to port 3000"))