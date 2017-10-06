/**
 * params       vs         query
 * params   /:id처럼 : 기호를 사용해 지정된 라우팅 매개변수
 * query    ?name=A 와 같은 요청 매개변수 
 */
var express = require('express');
var app = express();

app.get('/page/:id', function(request, response){
    // 변수를 선언
    var name = request.params.id;

    // 응답 
    response.send('<h1>'+name+'</h1>');
});


app.listen(3000, function(){
    console.log('Server Running at port 3000');
});
