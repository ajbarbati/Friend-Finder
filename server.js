
// Here are my paths 
var express = require("express")

//here's how we start the express app
var app = express()
var PORT = process.env.PORT || 3000

//this is for data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//grabs the routes
require("./app/routing/apiroutes")(app);
require("./app/routing/htmlRoutes")(app);

//starts up the server
app.listen(PORT, function() {
    console.log("twerkin on " + PORT)
  })