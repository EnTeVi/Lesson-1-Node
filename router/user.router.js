// const router = require('express').Router();
// const controller = require('../controller/user.controller')
// const mdlwr = require('../middleware/user.middleware');
//
// // Запит юзерів у БД
// router.get('/', controller.getAllUsers);
//
// // Запит конкретного юзера у БД
// router.get('/:userId', mdlwr.checkIsUserExist, controller.getUserById);
//
// // Додавання юзерів у БД
// router.post('/', controller.postUser);
//
// // Редагування конкретного юзера в БД
// router.put('/:userId', mdlwr.checkIsUserExist, controller.updateUser);
//
// // Видалення конкретного юзера з БД
// router.delete('/:userId', controller.deleteUser);
//
// module.exports = router;


const router = require('express').Router();

const { userController } = require("../controller");
const mdlwr = require("../middleware/user.middleware");

router.get('/', userController.getAllUsers);
router.post('/', mdlwr.isBodyValidCreate, mdlwr.userNormalizator, mdlwr.checkIsEmailUnique, userController.createUser);

router.get('/:userId', mdlwr.checkIsUserExist, userController.getUserById);
router.put('/:userId', mdlwr.isBodyValidUpdate, mdlwr.userNormalizator, mdlwr.checkIsUserExist, userController.updateUser);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;