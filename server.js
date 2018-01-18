!('NODE_ENV' in process.env) && require('dotenv').config();
const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');
const shokoRoutes = require('./routes/route.js');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(logger('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use('/shoko', shokoRoutes);
// app.use('/', (req, res) => res.send('Hello World, David'));

app.use(express.static(path.join(__dirname, 'dist')));

app.use('*', (req, res) => {
  res.status(404).send('Not Found');
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({
    error:
    err,
    message: err.message,
  });
});

app.listen(PORT, () => {
  console.log(`Listening to: Andre ${PORT}`);
});
