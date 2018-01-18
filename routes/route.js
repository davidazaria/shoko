const express = require('express');

const shokoRoutes = express.Router();

shokoRoutes.route('/');
  console.log('Hello route');
module.exports = shokoRoutes;
