const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const https = require('https');
const app = express();

app.use(bodyParser.urlencoded({ extended : true}));

app.use(express.static("public"));

app.get("/", function(req, res){
  res.sendFile(__dirname+"/signup.html");
});

app.post("/", function(req,res)
{
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    var data = {
      members : [
        {
          email_address: email,
          status: "subscribed",
          merge_fields: {
            FNAME: firstName,
            LNAME: lastName
          }
        }
      ]
    }

    var jsondata = JSON.stringify(data);

    const url = "https://us5.api.mailchimp.com/3.0/lists/79dec86b7f";

    const options ={
      method: "POST",
      auth : "praveen:5e9dfddd07fb9a293c02f4d27efb1bb-us5"
    }

const request = https.request(url, options, function(response){

      if(response.statusCode === 200){
        res.sendFile(__dirname+"/success.html");
      }else{
        res.sendFile(__dirname+"/failure.html");
      }
        response.on("data", function(data){
          console.log(JSON.parse(data));
        })
    })

    request.write(jsondata);
    request.end();


});

app.post("/failure", function(req, res){
  res.redirect("/");
})


app.listen(process.env.PORT || 3000, function()
{
  console.log("Server is running in the port 3000");
});

// List id
// 79dec86b7f
// API KEY
// 5e9dfddd07fb9a293c02f4d27efb1bbb-us5
