const router = require('express').Router();
const controller = require('../controller/user.controller')
const mdlwr = require('../middleware/user.middleware');

// Запит юзерів у БД
router.get('/', controller.getAllUser);

// Додавання юзерів у БД
router.post('/', mdlwr.isBodyValidCreate, controller.postUser);

// Запит конкретного юзера у БД
router.get('/:userId', mdlwr.isIdValid, mdlwr.checkIsUserExist, controller.getUserById);

// Редагування конкретного юзера в БД
router.put('/:userId', mdlwr.isIdValid, mdlwr.isBodyValidUpdate, mdlwr.checkIsUserExist, controller.updateUser);

// Видалення конкретного юзера з БД
router.delete('/:userId', mdlwr.isIdValid, mdlwr.checkIsUserExist, controller.deleteUser);

module.exports = router;