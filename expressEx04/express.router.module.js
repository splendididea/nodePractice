const express = require('express');

const app = express();

// 라우터 생성 
var routeA = express.Router();
var routeB = express.Router();

// 라우터A를 설정 
routeA.get('/index', function(request, response){
    response.send('<h1>Index Page AA </h1>');
});

routeB.get('/index', function(request, response){
    response.send('<h1>Index Page BB</h1>');
});

app.use('/a', routeA);
app.use('/b', routeB);

app.listen(52273, function(){
    console.log('Server Running at 52273');
});
