const express=require('express');
const app=express();

app.get("/", function(req, res){
  res.send("<h1>Hello World..!</h1>");
});

app.get("/contact", function(req, res){
  res.send("<h2>Contact : <em> praveenkumars4u@gmail.com </em></h2>")
});

app.get("/about", function(req, res){
  res.send("<h3>Hello I'm Praveen Kumar, Im aspiring Full Stack Web Developer.</h3>")
});

app.get("/hobbies", function(req, res){
  res.send("<ul><li>Code</li><li>Code</li></ul>")
});

app.listen(3000, function(){
  console.log("App is listening to port 3000");
}
);
