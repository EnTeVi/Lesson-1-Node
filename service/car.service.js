const Car = require("../dataBases/Car");

module.exports = {
    findByParams: async (filter = {}) => {
        return Car.find(filter);
    },

    findOneByIdWithUser: async (carId) => {
        return Car.findById(carId).populate('user');
    },

    create: async (carInfo) => {
        return Car.create(carInfo);
    },
};