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
		type:String
	},
	buy_url:{
		type:String
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