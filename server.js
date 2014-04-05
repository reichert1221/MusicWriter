// server.js

var express = require("express");
var morgan = require("morgan");
var methodOverride = require("method-override");
var bodyParser = require("body-parser");
var mongoose = require("mongoose");
var port = process.env.PORT || 8000;
var app = express();

// MongoDB setup
/*
var db = require("./server/config/db")
mongoose.connect(db.url);
require("./server/config/schema");
*/

// Configuration
app.use(express.static(__dirname + "/public"));
app.use(bodyParser());
app.use(methodOverride);
app.use(morgan("dev"));


// Routes


// Launch
app.listen(port);
console.log("Node app listening on port: " + port);
