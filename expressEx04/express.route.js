const express = require('express');

var app = express();

// 라우터를 설정 
app.get('/a',function(request, response){
    response.send('<a href="/b">Go to B</a>');
});

app.get('/b', function(request, response){
    response.send('<a href="/a">Go to A</a>');
});

app.listen(3000, function(){
    console.log('Server Running at port 3000');
});