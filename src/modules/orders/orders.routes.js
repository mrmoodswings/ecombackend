const express = require('express');
const Controller = require('./orders.controller');
const jwtAuth = require('../auth/auth.middleware');

const router = express.Router();
router.get('/',jwtAuth,Controller.getOrders);
router.get('/:id',jwtAuth,Controller.getOrder);
router.post('',jwtAuth,Controller.createOrder);
module.exports = router;