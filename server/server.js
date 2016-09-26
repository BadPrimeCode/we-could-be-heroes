console.log('server.js sourced');

// required things
var express = require('express');
var app = express();
var mongoose = require('mongoose');
var path = require('path');

// body parser
var bodyParser = require('body-parser');
app.use(bodyParser.json());

//connection string with the database
var connection = require('./public/assets/modules/connection');
mongoose.connect(connection);

// port decision
app.set('port', (process.env.PORT || 4242));

// spin up server
app.listen(app.get('port'), function() {
  console.log('listening on', app.get('port'));
});

// routers
var indexRouter = require('./routes/indexRouter');
var heroesRouter = require('./routes/heroesRouter');

// use routers
app.use('/', indexRouter);
app.use('/heroes', heroesRouter);

// direct to path
app.get('/*', function(req,res){
    // console.log('property: ', req.params[0]);
    var file = req.params[0] || '/views/index.html';
    res.sendFile(path.join(__dirname, '/public/', file));
}); //end direction

// set up static public folder
app.use(express.static('public'));
