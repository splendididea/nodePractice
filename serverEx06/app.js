// 모듈을 추출 한다. 
var http = require('http');
var fs = require('fs');
var url = require('url');

// 서버를 생성 및 실행한다. 
http.createServer((req, res)=>{
    // 변수를 선언한다. 
    var pathname = url.parse(req.url).pathname;
    console.log(pathname);
    // 페이지 구분 
    if(pathname == '/') {
        fs.readFile('index.html', function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    } else if (pathname == '/OtherPage') {
        fs.readFile('OtherPage.html',function(err, data){
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    }
}).listen(3000, function(){
    console.log('Server is Running at port 3000');
});

