const express = require('express');

var app = express();


/**
 * express는 request 이벤트 리스너를 연결하는데 use()를 사용한다. 
 * use()는 여러번 사용할 수 있다.
 * use()의 매개변수는 function(request, response, next) 형태로 들어간다. 
 * next는 다음에 위치하는 함수를 의미한다.  
 */
app.use(function(request, response, next){
    // 변수 선언 
    var name = request.query.name;
    var region = request.query.region;
    response.send('<h1>' + name + ' - ' + region + '</h1>' );
});

app.listen(3000, function(){
    console.log('Server Running 3000');
});