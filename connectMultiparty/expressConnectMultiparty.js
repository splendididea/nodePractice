/**
 * connect-multiparty 미들웨어
 * 일반적인 입력양식은 application/x-www-form-urlencoded 인코딩 방식을 사용
 * 파일은 일반적인 입력 방식과는 다르게 용량이 크다. 
 * 따라서 웹 브라우저는 파일을 전송할 때 multipart/form-data 인코딩 방식을 사용
 * 요청방식과 인코딩 방식은 동일한 것이라서 post 방식이면 application/x-www-form-urlencoded
 * 그런데 body-parser 미들웨어는 multipart/form-data 인코딩방식을 지원하지 않는다. 
 * 
 * 해당 인코딩 방식을 지원해 주는게 connect-multiparty 미들웨어이다. 
 * 같은 이름을 올리면 덮어쓰기가 된다. 
 * 
 * 일반적으로 morgan , cookie-parser, body-parser 미들웨어는 모든 페이지에서 사용된다. 
 * 따라서 전역적으로 적용하는것이 일반적  하지만 파일 업로드 기능은 일부 페이지에서만 수행될 가능성이 높다. 
 * 해당 페이지 라우팅에만 해당 미들웨어를 적용할 수 있다. 
 * app.post('/', multipart, function(req, res){
 * 
 * });
 * 
 * / 경로로 들어가면 mulitpart 미들웨어가 먼저 수행되고, 뒤따라 콜백 함수가 실행된다. 
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
    // 변수를 선언
    var comment = request.body.comment;
    var imageFile = request.files.image;

    if(imageFile){
        // 변수를 선언 
        var name = imageFile.name;
        var path = imageFile.path;
        var type = imageFile.type;

        // 이미지 파일 확인
        if(type.indexOf('image') != -1){
            // 이미지 파일인 경우 : 파일 이름을 변경한다.
            var outputPath = __dirname + '/multipart' + Date.now() + '_' + name;
            fs.rename(path, outputPath, function(err){
                response.redirect('/');
            });
        } else {
            // 이미지 파일이 아닌 경우 : 파일을 제거한다.
            fs.unlink(path, function(err){
                response.sendStatus(400);
            });
        } 
    } else {
        // 파일이 없는 경우 
        response.sendStatus(404);
    }
    response.redirect('/');
});

app.listen(52773, function(){
    console.log('Server Running at 52773');
});