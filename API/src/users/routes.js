const { Router } = require('express');
const controller = require('../users/controller');
const router = Router();

router.get('/', controller.getUsers);
router.get('/:id', controller.getByID);
router.post('/', controller.addUser);
router.put('/', controller.modUser);

module.exports = router;
