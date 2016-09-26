console.log('server.js sourced');

// required things
var express = require('express');
var app = express();
var mongoose = require('mongoose');

// body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//connection string with the database
var connection = require('../modules/connection');
mongoose.createConnection(connection);

// port decision
app.set('port', (process.env.PORT || 4242));

// spin up server
app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
});

// set up static public folder
app.use(express.static('public'));

// routers
var indexRouter = require('./routes/indexRouter');
var heroesRouter = require('./routes/heroesRouter');

// use routers
app.use('/', indexRouter);
app.use('/heroes', heroesRouter);
