const express = require('express');
const Controller = require('./products.controller');
const jwtAuth = require('../auth/auth.middleware');
const upload = require('../../utils/multer').upload('items');
const router = express.Router();

router.get('',Controller.getProducts);
router.get('/:id',jwtAuth,Controller.getProduct);
router.post('',jwtAuth,upload.single('image'),Controller.createProduct);
module.exports = router;