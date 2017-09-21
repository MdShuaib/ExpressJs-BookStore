var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
Genre =  require("./models/genre");
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;

app.get('/', (req, res) => {
	res.send('Hello Api');
});

app.get('/api/genres', (req, res) => {
	Genre.getGenres(function(err, genres) {
		if(err) {
			throw err;
			console.log(err)
		}
		res.json(genres);
	});
});

app.listen(3000);
console.log("Runnning on port 3000...")
