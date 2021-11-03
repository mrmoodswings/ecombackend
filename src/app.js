
require('../config');
const express = require('express');
const cors = require('cors');
const passport = require('passport');
const ErrorHandler = require('../src/utils/errorHandler');
const routes = require('./modules');
const APIError = require('../src/utils/error');

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended:true}));

/**
 * Enable Cross Origin Requests
 * Essential since Backend and Front end are
 * seperated. Both servers run on different
 * ports, making the api requests cors.
 */
app.use(cors({ origin: '*'}));

/**
 * Register Passport middleware for authentication
 */
 app.use(passport.initialize());

 // Register Routes
 routes(app);
 
 // catch 404 and forward to error handler
 app.use('/uploads/items', express.static('uploads/items')); 
app.use(function (req, res, next) {
    next(new APIError('Requested URL Not Found', 404));
});

// Error Handler Middleware
app.use(ErrorHandler);

module.exports.app = app;


