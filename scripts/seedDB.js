const mongoose = require('mongoose');
const db = require('../models');

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI);

const reviewSeed = [
	{
		name: 'Clifford Morin',
		text: 'This game is awesome!!',
		date: new Date(Date.now())
	},
	{
		name: 'Zach Stone',
		text: 'This game is super cool!!',
		date: new Date(Date.now())
	},
	{
		name: 'Joey Jaspers',
		text: 'This game is totally rad!!',
		date: new Date(Date.now())
	},
	{
		name: 'Manny Ohman',
		text: 'This game is so much fun!!',
		date: new Date(Date.now())
	}
];

db.bells
	.remove({})
	.then(() => db.bells.collection.insertMany(reviewSeed))
	.then((data) => {
		console.log(data.result.n + ' records inserted!');
		process.exit(0);
	})
	.catch((err) => {
		console.error(err);
		process.exit(1);
	});
