const express = require('express');
const Controller = require('./users.controller');
const jwtAuth = require('../auth/auth.middleware');
const router = express.Router();


router.post('',Controller.createUser);
router.patch('/:id',jwtAuth,Controller.updateUser);

module.exports = router;