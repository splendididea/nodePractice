const http = require('http');
const jade = require('jade');
const fs = require('fs');

/**
 * Jade 특수 태그 
 * - Code       자바스크립트 코드 입력
 * #{Value}     데이터를 출력     내용물 중간에 데이터 입력 가능
 * =Value       데이터를 출력     내용 전체를 데이터로 지정 
 * 
 * ejs모듈의 render 같은 역할을 fn함수의 매개변수에 jade 페이제 전달할 데이터를 입력한다. 
 */


// 서버를 생성하고 실행 
http.createServer(function(request, response){
    // JadePage.jade 파일을 읽음 
    fs.readFile('JadePage.jade', 'utf8' , function(err, data){
        var fn = jade.compile(data);
        response.writeHead(200, {'Content-Type' : 'text/html'});
        // jade 모듈 사용 
        response.end(fn({
            name : 'RintIanTta',
            description : 'Hello jade with node js'
        }));
    });
}).listen(3000, function(){
    console.log('Server is Running at port 3000');
})
