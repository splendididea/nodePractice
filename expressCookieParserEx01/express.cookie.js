/**
 * cookie() 옵션 속성
 * httpOnly             클라이언트의 쿠키 접근 권한을 설정
 * secure               secure 속성 지정
 * expires              expires 속성 지정
 * maxAge               상대적으로 expires 속성 지정
 * path                 path 속성을 지정
 * */


const express = require('express');
const cookieParser = require('cookie-parser');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser());

app.get('/getCookie',function (req, res) {
   res.send(req.cookies);
});

// 라우터를 설정
app.get('/setCookie',function (request, response) {
    response.cookie('string' , 'cookie');
    response.cookie('json',{
        'name' : 'cookie',
        'property' : 'delicious'
    });

    // 응답
    response.redirect('/getCookie');
});

app.listen(52273, function () {
    console.log('Server Running at 52273');
})