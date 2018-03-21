const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const routes = require('./routes');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Mongo connection
const dbConfig = require('./config/database');
const mongoose = require('mongoose');

mongoose.connect(dbConfig.url);

mongoose.connection.on('error', () => {
  console.log('Could not connect to the database');
  process.exit();
});

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Init routes
routes(app);

// Run server
app.listen(3002, () => console.log('App is listening on port 3002!'));