/**
 * 쿠키가 클라이언트의 웹 브라우저 정보를 저장하는 기술 
 * 세션은 서버에 정보를 저장하는 기술 
 * session() 메서드 옵션
 * name                 쿠키의 name 속성을 지정
 * store                세션 정장소를 지정
 * cookie               생성 cookie와 관련된 정보를 지정
 * script               비밀 키를 지정
 * resave               세션이 변경되지 않았어도 세션 저장소에 반영할지 설정 
 * saveUnintilized      초기화되지 않은 세션을 세션 저장소에 저장할지 설정 
 * 
 * session 객체의 메서드 
 * regenerate()         세션을 다시 생성 
 * detroy()             세션을 제거 
 * reload()             세션을 다시 불러온다. 
 * save()               세션을 저장 
 */

const express = require('express');
const session = require('express-session');

var app = express();

app.use(session({
    secret : 'secret kye',
    resave : false, 
    saveUninitialized : true,
    name : 'cookie-name'
    
}));

app.use(function(req, res){
    // 세션을 저장한다. 
    req.session.now = (new Date()).toUTCString();
    // 응답 한다. 
    res.send(req.session);
});

app.listen(57223, function(){
    console.log('Server Running 57223');
});