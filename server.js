var express = require('express');
var app = express();

app.use("/", express.static(__dirname + '/www'));

app.listen('4000');
console.log('working on 4000');

