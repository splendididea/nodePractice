/**
 * body parser는 post 요청 데이터를 추출하는 미들웨어이다
 * 사용하면 request 객체에 body 속성이 부여된다
 * */
// 모듈 추출
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const morgan = require('morgan');

// 서버 생성
var app = express();

// 미들웨어 설정
app.use(cookieParser);
app.use(bodyParser.urlencoded({extended : false}));
// app.use(morgan('dev'));

// 라우터를 설정
app.get('/' , function (request, response) {
    if(request.cookies.auth){
        response.send('<h1>Login Success!</h1>')
    } else {
        response.redirect('/login');
    }
});

app.get('/login' ,function (request, response) {
    fs.readFile('login.html',function (err, data) {
        response.send(data.toString());
    })
});

app.post('/login' ,function (request, response) {
    // 쿠키를 생성
    var login = request.body.login;
    var password = request.body.password;

    // 로그인을 확인
    console.log(login) , password;
    console.log(request.body);

    // 로그인을 확인
    if(login == 'ring' && password == '1234') {
        // 로그인 성공
        response.cookie('auth' , true);
        response.redirect("/");
    } else {
        response.redirect("/login");
    }
});

app.listen(57723 , function () {
    console.log('Server Running at 57723');
});