var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Hello Api');
});

app.listen(3000);
console.log("Runnning on port 3000...")
