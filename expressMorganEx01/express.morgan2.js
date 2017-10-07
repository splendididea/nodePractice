/**
 * Morgan 미들웨어 토큰
 * :req[header]     요청 헤더를 나타냄
 * :res[header]     응답 헤더
 * :http-version    HTTP 버전
 * :response-time   응답 시간
 * :remote-addr     원격 주소
 * :date[format]    요청 시간
 * :method          요청 방식
 * :url             요청 URL
 * :referrer        이전 URL
 * :User-Agent      사용자 에이전트
 * :status          상태 코드
 *
 * */

// 모듈을 추출
const express = require('express');
const morgan = require('morgan');

var app = express();
app.use(morgan(':method + :date'));
app.use(function (request, response) {
    response.send('<h1>Hello Morgan</h1>')
});

app.listen(52273, function () {
    console.log('Server Running at 52273');
})
