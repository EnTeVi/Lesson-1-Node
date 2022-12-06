const router = require('express').Router();
const controller = require('../controller/car.controller');
const mdlwCar = require('../middleware/car.middleware');

router.get('/', controller.getAllCars);

router.post('/', controller.postCar);

router.get('/:carId', mdlwCar.checkIsCarExist, controller.getCarById);

router.put('/:carId', mdlwCar.checkIsCarExist, controller.updateCar);

router.delete('/:carId', mdlwCar.checkIsCarExist, controller.deleteCar);

module.exports = router;