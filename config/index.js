const dotenv = require('dotenv');
const path = require('path');


    // Initialize Environment variables.
    dotenv.config({
        path: path.join(__dirname, '..', '.env'),
    });

