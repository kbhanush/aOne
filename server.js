'use strict'

var express = require('express');
var jwt = require('jwt-simple');
var lodash = require('lodash')
var bodyParser = require('body-parser')

const port = 8080;

var app = express();

app.use(bodyParser.json());
app.use(express.static(__dirname));

app.listen(port, function() {
    console.log(`aOne listening on port ${port}`)
});

require('./scripts/api/itemAPI')(app);
require('./scripts/api/commentAPI')(app);
require('./scripts/api/offerAPI')(app);
require('./scripts/api/userAPI')(app);
app.get('/', function(req, res) {
    res.sendfile('index.html')
});
