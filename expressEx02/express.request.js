/**
 * 요청 헤더의 속성 추출 
 * header 메서드를 사용하면 손쉽게 요청 헤더 속성을 지정, 추출 할 수 있다 
 * 웹 브라우저 http 요청을 하면 반드시 User-Agent 속성이 추출한다. 
 */
const express = require('express');

var app = express();

// 미들웨어 설정 
app.use(function(request, response, next){
    // User-Agent 속성을 추출 
    var agent = request.header('User-Agent');
    console.log(request.headers);
    console.log(agent);
    // 상태 코드만 보낼 때는 sendStatus() 메서드를 사용
    response.sendStatus(200);
});

app.listen(3000, function(){
    console.log('Server Running at port 3000');
})