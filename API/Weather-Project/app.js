const express = require('express');
const https = require('https');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.get("/", function(req, res) {

    res.sendFile(__dirname+"/index.html");

});

app.post("/", function(req, res){
  const place = req.body.cityName;
  const unit = "metric";
  const apiKey = "727e82e390a42b75c683a01c241970a4";

  const url = "https://api.openweathermap.org/data/2.5/weather?q="+place+"&appid=" +apiKey+ "&units="+unit;
  https.get(url, function(response) {

    response.on("data", function(data) {
      const wheatherData = JSON.parse(data);
      const temp = wheatherData.main.temp;
      const desc = wheatherData.weather[0].description;
      const icon = wheatherData.weather[0].icon;
      const imageUrl = "http://openweathermap.org/img/wn/"+icon+"@2x.png"
      res.write("<p>The weather is currently "+desc+ "</p>");
      res.write("<img src=" + imageUrl + ">");
      res.write("<h1>The temprature in "+place+" is "+temp+" deg Celcius.</h1>");
      res.send();
    });
  });
});

app.listen(3000, function() {
  console.log("Server is running in the port 3000");
});
