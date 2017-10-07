/**
 * connect-multiparty 미들웨어
 * 일반적인 입력양식은 application/x-www-form-urlencoded 인코딩 방식을 사용
 * 파일은 일반적인 입력 방식과는 다르게 용량이 크다. 
 * 따라서 웹 브라우저는 파일을 전송할 때 multipart/form-data 인코딩 방식을 사용
 * 요청방식과 인코딩 방식은 동일한 것이라서 post 방식이면 application/x-www-form-urlencoded
 * 그런데 body-parser 미들웨어는 multipart/form-data 인코딩방식을 지원하지 않는다. 
 * 
 * 해당 인코딩 방식을 지원해 주는게 connect-multiparty 미들웨어이다. 
 * 
 */
const fs = require('fs');
const express = require('express');
const multipart = require('connect-multiparty');

// 서버를 생성 
var app = express();
// 미들웨어 설정 
app.use(multipart({ uploadDir: __dirname + '/multipart'}));

// 라우터를 설정 
app.get('/', function(request, response){
    fs.readFile('HTMLPage.html', function(err, data){
        response.send(data.toString());
    });
});

app.post('/', function(request, response){
    console.log(request.body);
    console.log(request.files);
    response.redirect('/');
});

app.listen(52773, function(){
    console.log('Server Running at 52773');
});