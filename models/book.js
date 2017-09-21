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
	var queryId = {_id: id}
	var updatedData = {
		title: book.title,
		author: book.author,
		genre:book.genre,
		description: book.description,
		publisher : book.publisher,
		image_url:book.image_url,
		buy_url:book.buy_url
	}
	Book.findOneAndUpdate(queryId, updatedData, options, callback)
}
