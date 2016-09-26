var express = require('express');
var router = express.Router();
var path = require('path');

// send to index
router.get('/', function(req, res) {
  var index = path.join(__dirname, '../public/views/index.html');
  res.sendFile(index);
});

module.exports = router;
