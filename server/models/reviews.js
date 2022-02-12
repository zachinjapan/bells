const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reviewsSchema = new mongoose.Schema({
	name: {
		type: String,
		trim: true,
		required: 'Enter a name for the review'
	},
	text: {
		type: String,
		trim: true,
		required: 'Enter your review here'
	},
	date: {
		type: Date,
		default: Date.now
	}
});

const Reviews = mongoose.model('Reviews', reviewsSchema);

module.exports = Reviews;
