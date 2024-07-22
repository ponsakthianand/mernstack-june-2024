var express = require('express');
var app = express();
var fs = require("fs");

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
  fs.readFile(__dirname + "/" + "users.json", 'utf8', function (err, data) {
    var users = JSON.parse(data);
    var user = req.body;
    const total = Object.keys(users)
    users["user" + (total.length + 1)] = { ...user, id: (total.length + 1) }
    fs.writeFile(__dirname + "/" + "users.json", JSON.stringify(users), function (err, data) { })
    res.end(JSON.stringify(users));
  });
})


var server = app.listen(5000, function () {
  console.log("Express App running at http://127.0.0.1:5000/");
})