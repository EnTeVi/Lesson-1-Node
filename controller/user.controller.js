const {fileServices} = require("../services");
module.exports = {
    getAllUser: async (req, res, next) => {

        try {
            const users = await fileServices.reader();

            res.json(users);
        }catch (e) {
            next(e);
        }
    },

    postUser: async (req, res, next) => {

        try {
            const {name, age} = req.body;

            if (!name || name.length < 2) {
                return res.status(400).json(`User not found`);
            }
            if (!age || age < 18 || Number.isNaN(age)) {
                return res.status(400).json(`Wrong age`);
            }

            const users = await fileServices.reader();
            const user = {
                id: users[users.length -1].id + 1,
                name,
                age
            };

            users.push(user);

            await fileServices.writer(users);

            res.status(201).json(user);
        }catch (e) {
            next(e);
        }
    },

    getUserById: async (req, res, next) => {


        try {
            // throw new Error('Uppsss');
            res.json(req.user);
        }catch (e) {
            next(e);
        }

        // const {userId} = req.params;
        // const users = await fileServices.reader();
        // const user = users.find((user) => user.id === +userId);
        //
        // if (!user) {
        //     return res.status(300).json(`User ${userId} not found`);
        // }
        //
        // res.json(user);
    },

    updateUser: async (req, res, next) => {

        try {
            const newUserInfo = req.body;
            const {userId} = req.params;
            const users = await fileServices.reader();
            const index = users.findIndex((user) => user.id === +userId);

            if (index === -1) {
                return res.status(300).json(`User ${userId} not found`);
            }

            users[index] = {...users[index], ...newUserInfo};
            await fileServices.writer(users);

            res.status(201).json(users[index]);
        }catch (e) {
            next(e);
        }
    },

    deleteUser: async (req, res, next) => {

        try {
            const {userId} = req.params;
            const users = await fileServices.reader();
            const index = users.findIndex((user) => user.id === +userId);

            if (index === -1) {
                return res.status(300).json(`User ${userId} not found`);
            }

            users.splice(index, 1);
            await fileServices.writer(users);

            res.sendStatus(204);
        }catch (e) {
            next(e);
        }
    },
}