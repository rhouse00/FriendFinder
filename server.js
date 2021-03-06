var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();
var PORT = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.use(express.static("app"));

require("./app/routing/api-routes")(app);
require("./app/routing/html-routes")(app);

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});