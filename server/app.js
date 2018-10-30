const express = require('express')
const Item = require('./todos')
const app = express()
const port = 3000

let items = []

// get the body parser
var bodyParser = require('body-parser')
app.use(bodyParser.json())

// to resolve CORS issue
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.post("/todos",(req,res) => {

  let title = req.body.title
  let priority = req.body.priority

  let item = new Item(title,priority)
  items.push(item)
  res.send("Posted..")
})

// localhost:3000
app.get("/",function(req,res){

//  let task1 = new Task("Wash car","high")
  //let task2 = new Task("Feed Dog","medium")

  //let tasks = [task1, task2]

  //let tasks = [{ title : "Wash the car", priority : "high"}, { title : "Feed the dog", priority : "medium"}]

  res.json(items)

})

app.listen(port,function(){
  console.log("Server has started.....")
})
