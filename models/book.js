var mongoose = require('mongoose');

// Book Schema
var bookSchema = mongoose.Schema({
	title:{
		type: String,
		required: true
	},
	genre:{
		type:String,
		required:true
	},
	description:{
		type:String,
		required:false
	},
	author:{
		type:String,
		required:true
	},
	publisher:{
		type:String,
		required:true
	},
	image_url:{
		type:String,
		required:true
	},
	buy_url:{
		type:String,
		required:true
	},
	create_date:{
		type: Date,
		default: Date.now
	}
});

var Book = module.exports = mongoose.model('Book', bookSchema);

// Get Books
module.exports.getBooks = (callback, limit) => {
	Book.find(callback).limit(limit);
}

// Get Books by id
module.exports.getBookById = (_id, callback) => {
	Book.findById(_id, callback)
}

// Add Book
module.exports.addBook = (book, callback) => {
	Book.create(book, callback);
}

// update Books by id
module.exports.updateBookById = (id, book, options, callback) => {
	var objForUpdate = {};
	if (book.title) objForUpdate.title = book.title;
	if (book.author) objForUpdate.author = book.author;
	if (book.genre) objForUpdate.genre = book.genre;
	if (book.publisher) objForUpdate.publisher = book.publisher;
	if (book.description) objForUpdate.description = book.description;
	if (book.image_url) objForUpdate.image_url = book.image_url;
	if (book.buy_url) objForUpdate.buy_url = book.buy_url;
	
	var setObj = { objForUpdate }
	console.log("Session: %j", setObj);
	var queryId = {_id: id}
	
	Book.findOneAndUpdate(queryId, objForUpdate, options, callback)
}


// delete Books by id
module.exports.deleteBookById = (id, callback) => {
	
	var queryId = {_id: id}
	
	Book.remove(queryId, callback)
}

