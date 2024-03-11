const { Router } = require('express');
const controller = require('../idList/controller');
const router = Router();

router.get('/:id', controller.getByID);
router.post('/', controller.addUser);
router.put('/', controller.modUser);
router.get('/', controller.getListID);

module.exports = router;
