var express = require('express');
var app = express();

app.use('/a', require('./routeA').router);

app.listen(52273, function(){
    console.log('Server Running at 52273');
});