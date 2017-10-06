const express = require('express');

var app = express();

/**
 * request 이벤트 리스너
 * 
 */

app.use(function(req, res){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.end();
});

app.listen(3000, function(){
    console.log('Express Server is Starting at port 3000');
})