const db = require('../models');

// Defining methods for the reviewsController
module.exports = {
	findAll: function(req, res) {
		db.Reviews
			.find(req.query)
			.sort({ date: -1 })
			.then((dbModel) => {
				console.log(json(dbModel))
				res.status(200).json(dbModel)
			})
			.catch((err) => res.status(422).json(err));
	},
	findById: function(req, res) {
		db.Reviews
			.findById(req.params.id)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	create: function(req, res) {
		db.Reviews.create(req.body).then((dbModel) => res.json(dbModel)).catch((err) => res.status(422).json(err));
	},
	update: function(req, res) {
		db.Reviews
			.findOneAndUpdate({ _id: req.params.id }, req.body)
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	},
	remove: function(req, res) {
		db.Reviews
			.findById({ _id: req.params.id })
			.then((dbModel) => dbModel.remove())
			.then((dbModel) => res.json(dbModel))
			.catch((err) => res.status(422).json(err));
	}
};
