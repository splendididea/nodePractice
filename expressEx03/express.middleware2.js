/**
 * 8 미들웨어 
 * 사용 목적 미들웨어에 request와 response객체에 추가한 속성과 메서드를 사용할 수 있다. 
 * express와 사용할 수 있는 미들웨어
 * router                   페이지 라우트를 수행
 * static                   특정 폴더를 서버의 루트 폴더에 올린다. 
 * morgan                   로그 정보를 출력 
 * cookie parser            쿠키를 분해 
 * body parser              POST 요청 매개변수를 추출 
 * connect-multiparty       POST 요청 매개변수를 추출 
 * express-session          세션 처리를 수행 
 * csurf                    CSRF 보안을 수행
 * error handler            예외 처리를 수행
 * limit                    POST 요청의 데이터를 제한한다. 
 * vhost                    가상 호스트를 설정 
 * 
 */

const express = require('express');

const app = express();

app.use(function(request, response, next){
    // 데이터를 추가한다. 
    request.number = 52;
    response.number = 3030;
    next();
});

app.use(function(request,response, next){
    response.end('<h1>'+request.number+' - ' + response.number + '</h1>');
});

app.listen(3000, function(){
    console.log('Server Running 3000')
})