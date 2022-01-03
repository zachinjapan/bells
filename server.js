// const express = require('express');

// const mongoose = require('mongoose');
// const routes = require('./routes');
// const app = express();
// const PORT = process.env.PORT || 3001;

// // Define middleware here
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());
// // Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === 'production') {
// 	app.use(express.static('client/build'));
// }
// // Add routes, both API and view
// app.use(routes);

// // Connect to the Mongo DB
// mongoose.connect(process.env.MONGODB_URI);

// // Start the API server
// app.listen(PORT, function() {
// 	console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
// });

const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config({ path: './config.env' });
const port = process.env.PORT || 3001;
app.use(cors());
app.use(express.json());
app.use(require('./routes/api'));
// get driver connection
const dbo = require('./db/conn');

app.listen(port, () => {
	// perform a database connection when server starts
	dbo.connectToServer(function(err) {
		if (err) console.error(err);
	});
	console.log(`Server is running on port: ${port}`);
});
