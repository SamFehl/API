const { Router } = require('express');
const controller = require('../users/controller');
const router = Router();

router.get('/', controller.getUsers);

module.exports = router;
