const {fileServicesCars} = require('../services');

module.exports = {
    getAllCars: async (req, res, next) => {
        try {
            const cars = await fileServicesCars.reader();
            res.json(cars);
        }catch (e) {
            next(e);
        }
    },

    postCar: async (req, res, next) => {
        try {
            const {brand, model, year} = req.body;

            if (!brand || brand.length < 2) {
                return res.status(400).json('Car brand not found');
            }
            if (!model || model.length < 1) {
                return res.status(400).json('Car model not found');
            }
            if (!year || year < 18 || Number.isNaN(year)) {
                return res.status(400).json('Wrong year');
            }

            const cars = await fileServicesCars.reader();
            const car = {
                id: cars[cars.length -1].id + 1,
                brand,
                model,
                year
            };

            cars.push(car);

            await fileServicesCars.writer(cars);
            res.status(201).json(car);
        }catch (e) {
            next(e);
        }
    },

    getCarById: async (req, res, next) => {
        try {
            res.json(req.car);
        } catch (e) {
            next(e);
        }
    },

    updateCar: async (req, res, next) => {
        try {
            const newCarInfo = req.body;
            const {carId} = req.params;
            const cars = await fileServicesCars.reader();
            const index = cars.findIndex((car) => car.id === +carId);

            if (index === -1) {
                return res.status(300).json(`Car ${carId} not found`);
            }

            cars[index] = {...cars[index], ...newCarInfo};
            await fileServicesCars.writer(cars);

            res.status(201).json(cars[index]);
        }catch (e) {
            next(e);
        }
    },

    deleteCar: async (req, res, next) => {
        try {
            const {carId} = req.params;
            const cars = await fileServicesCars.reader();
            const index = cars.findIndex((car) => car.id === +carId);

            if (index === -1) {
                return res.status(300).json(`Car ${carId} not found`);
            }

            cars.splice(index, 1);
            await fileServicesCars.writer(cars);

            res.sendStatus(204);
        }catch (e) {
            next(e);
        }
    },
}
