const { Router } = require('express');
const controller = require('../users/controller');
const router = Router();

router.get('/', controller.getUsers);
//router.get('/:id', controller.getId);
//router.get('/:id', controller.getByID);
//router.post('/', controller.addUser);
//router.post('/', controller.modUser);
//router.post('/', controller.addUser);

module.exports = router;
