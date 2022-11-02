const express = require('express')
const cors = require('cors')
var bodyParser = require('body-parser')
const { response } = require('express')
const app = express()

app.use(cors())
app.use(bodyParser.json())
app.get('/', function (req, res) {
  res.send('welcome to node express! testing nonmon')
})
app.get("/nodemon/text", function (req,res){
    res.send({fruits:'banana',quantity:100,price:1000})
})
const users = ["masud","rana","suva","maliha","nasima","hasina","rima","munni"]
const userInfo = {name:'masud',role:"action",rating:'5star'}
app.get("/users/:id",(req,res)=>{
  const id = req.params.id;
  const name = users[id];
  console.log(name,id)
  res.send({name,id});
  console.log(req.query.sort)

})
app.get('/user/:userinfo',(req,res)=>{
  res.send(userInfo);
})
app.post('/post', (req,res)=>{
  console.log(req.body);
  const user = req.body;
  user.id = 55;
  res.send(user);
})
app.listen(3000, ()=>console.log("Listning to port 3000"))