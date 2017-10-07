const express = require('express');
const morgan = require('morgan');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(morgan('combined'));
app.use(function (request, response) {
    response.send('<h1>Express Basic</h1>');
});

// 서버를 실행
app.listen(52273, function () {
    console.log('Server Running at 52273');
})



