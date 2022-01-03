const router = require('express').Router();
const reviewRoutes = require('./api');

// Book routes
router.use('/reviews', reviewRoutes);

module.exports = router;
