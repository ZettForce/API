const express = require('express');
const router = express.Router();
const car_Controller = require('../controllers/car.controller');

router.get('/', car_Controller.getCars);
router.post('/', car_Controller.addCar);

module.exports = router;