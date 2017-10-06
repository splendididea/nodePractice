const express = require('express');

var app = express();


// 미들웨어 1
app.use(function(request, response, next){
    console.log('first MiddleWare');
    next();
});

// 미들웨어 2
app.use(function(request, response, next){
    console.log('Second MiddleWare');
    next();
});

// 미들웨어 3
app.use(function(request, response, next){
    console.log('Third MiddleWare');
    response.writeHead(200, {'Content-type' : 'text/html'});
    response.end('<h1>Express Basic22</h1>');
    // response.send('<h1>Express Basic</h1>');
});

app.listen(3000, function(){
    console.log('Server Running at 3000');
});
