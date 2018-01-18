const express = require('express');

const shokoRoutes = express.Router();

shokoRoutes.get('/', (req, res) => {
  res.send('shoko hello');
});

module.exports = shokoRoutes;
