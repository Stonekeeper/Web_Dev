const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js');
const app = express();

var items = [];

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static("public"));

app.set('view engine', 'ejs');

app.get("/", function(req, res) {
  let currentDay = date.getDate();
  res.render('index', { currentDay: currentDay,addNewItem: items });
});

app.post("/", function(req, res) {
   var item = req.body.newItem;
   items.push(item);
   res.redirect("/");
});

app.listen(3000, function() {
  console.log("Server is running in the port 3000");
});
