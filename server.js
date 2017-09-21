var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


app.set('view engine', 'pug');
app.use(bodyParser.json());

Genre =  require("./models/genre");
Book =  require("./models/book");
// Connect to Mongoose
mongoose.connect('mongodb://localhost/bookstore');
var db = mongoose.connection;


/*Default route '/' */
app.get('/', (req, res) => {
	res.render('index', { title: 'Bookstore', message: 'Hello there!' })
});


/* Genre routes here */
app.get('/api/genres', (req, res) => {
	Genre.getGenres(function(err, genres) {
		if(err) {
			throw err;
			console.log(err)
		}
		res.json(genres);
	});
});


app.post('/api/genres', (req, res) => {
	var genre = req.body;
	Genre.addGenre(genre, function(err, genre) {
		if(err) {
			throw err;
			console.log(err)
		}
		res.json(genre);
	});
});


app.put('/api/genres/:_id', (req, res) => {
	var genreId = req.params._id;
	var queryData = req.body;
	Genre.updateGenre(genreId, queryData, {},  function(err, genre) {
		if(err) {
			throw err;
		}
		res.json(genre);
	});
});

app.delete('/api/genres/:_id', (req, res) => {
	var queryId = req.params._id;
	Genre.deleteGenreById(queryId, function(err, book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});



/* Books routes here...*/
app.get('/api/books', (req, res) => {
	Book.getBooks(function(err, books) {
		if(err) {
			throw err;
			console.log(err)
		}
		res.json(books);
	});
});



app.get('/api/books/:_id', (req, res) => {
	Book.getBookById(req.params._id, function(err, book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});


app.post('/api/books', (req, res) => {
	var book = req.body;
	Book.addBook(book, function(err, book) {
		if(err) {
			throw err;
			console.log(err)
		}
		res.json(book);
	});
});


app.put('/api/books/:_id', (req, res) => {
	var queryId = req.params._id;
	var bookData = req.body;
	Book.updateBookById(queryId, bookData, {},  function(err, book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});

app.delete('/api/books/:_id', (req, res) => {
	var queryId = req.params._id;
	Book.deleteBookById(queryId, function(err, book) {
		if(err) {
			throw err;
		}
		res.json(book);
	});
});


app.listen(3000);
console.log("Runnning on port 3000...")
