var express = require('express');
var app = express();
var fs = require("fs");
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/mongooseTraining');

const { Schema } = mongoose;

//schema
const userSchema = new Schema({
  name: String, // String is shorthand for {type: String}
  password: String,
  profession: String
});

//model
const Users = mongoose.model('Users', userSchema);

// app.post('/:id', function (req, res) {
//   fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
//     // const query = req.query.var
//     // console.log(query);
//     var users = JSON.parse(data);
//     var user = users[req.params.id]
//     res.end(user ? JSON.stringify(user) : 'data not available');
//   });
// })


var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/', function (req, res) {
  var payload = req.body;
  const user = new Users(payload);
  user.save().then(() => console.log('meow'));


  res.end('Record Created');
})


var server = app.listen(6000, function () {
  console.log("Express App running at http://127.0.0.1:6000/");
})