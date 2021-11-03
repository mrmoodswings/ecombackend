const express = require('express');
const jwtAuth = require('./auth.middleware');
const Controller = require('./auth.controller');

const router = express.Router();

/**
 * @api {post} /auth/login Login
 * @apiName Login
 * @apiGroup Auth
 * @apiDescription Login to the app.
 *
 * @apiParam {String} username - Email or Phone number.
 * @apiParam {String} password - Password.
 *
 * @apiSuccess {Object} user - User Object.
 * @apiSuccess {String} user.userId - User ID.
 * @apiSuccess {String} user.usergroup - User Group.
 * @apiSuccess {String} token - JWT Token.
 */
 router.post('/login', Controller.login);
 router.post('/refresh-token', Controller.refreshToken);
 
 module.exports = router;