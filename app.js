'use strict';
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

app.use(express.static('public'));
app.use(bodyParser.urlencoded());

var invoke = require('./invoke')(app);
var query = require('./query')(app);


var server = app.listen(3000,function(){
    console.log("http server has started on port 3000");
                        
});



