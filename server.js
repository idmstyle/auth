const express = require('express');
const path = require('path');

var app = express();
app.use('/auth', express.static(__dirname));
var server = app.listen('7001', () => {
    console.log('running');
});