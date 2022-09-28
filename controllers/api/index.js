const router = require('express').Router();
const userRoutes = require('./userRoutes');
const vehicleRoutes = require('./vehicleRoutes');
const reviewRoutes = require('./reviewRoutes');

router.use('/users', userRoutes);
router.use('/vehicles', vehicleRoutes);
router.use('/reviews', reviewRoutes);

module.exports = router;