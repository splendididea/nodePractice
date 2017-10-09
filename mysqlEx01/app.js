// 모듈 추출
const fs = require('fs');
const express = require('express');
const mysql = require('mysql');
const ejs = require('ejs');
const bodyParser = require('body-parser');

// 데이터 베이스 연결
var client = mysql.createConnection({
    user : "mufasa",
    password : "kr3557kr",
    database : "COMPANY"
});

// 서버 생성
var app = express();

app.use(bodyParser.urlencoded({
    extended : false
}));

// 서버를 실행
app.listen(52273, function () {
   console.log("Server Running at port 52273");
});

// 라우트를 수행 
app.get('/', function (request, response) {
    // 파일을 읽는다.
    fs.readFile('list.html',function (error, data) {
        if(error){
            console.log("error 발생!! 메세지 :: " , error);
        }

        // 데이터 쿼리를 처리한다.
        client.query("SELECT * FROM products", function (error, results) {

            // 응답합니다.
            response.send(ejs.render(data, {
                data : results
            }));
        })
    })
});

app.get('/delete/:id',function(request, response){
    client.query("DELETE FROM products WHERE id = ? ", [request.params.id], function(){
        // 응답 
        response.redirect("/"); 
    });
});

app.get('/insert',function (request, response) {
    fs.readFile('insert.html', function(error, data){
        response.end(data);
    });
});

app.post('/insert',function (request, response) {
    // 변수를 선언 
    var body = request.body;

    console.log(body.name);
    console.log(body.modelnumber);
    console.log(body.series);


    // 데이터 베이스에 추가
    client.query("INSERT into products (name, modelnumber, series) values (? , ? , ?) ",
            [body.name, body.modelnumber, body.series], function(error, result){
                console.log(error);
                // 응답
                response.redirect("/");
            });
});

app.get('/edit/:id' ,function (request, response) {

});

app.post('/edit/:id',function (request, response) {
    
});

