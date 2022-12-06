const carDb = require('../dataBases/cars.json');
const ApiError = require('../error/ApoError');

module.exports = {
    checkIsCarExist: (req, res, next) => {
        try {
            const {carId} = req.params;
            const car = carDb[carId];

            if (!car) {
                throw new ApiError('Car not found', 404);
            }

            req.car = car;

            next();
        }catch (e) {
            next(e);
        }
    }
}