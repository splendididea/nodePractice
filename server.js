// 모듈을 추출 
/**
 * server 객체의 메서드 
 * listen(port , callback)      서버를 실행
 * close([callback])            서버를 종료
 */
var http = require('http');

http.createServer( function(req , res){
    res.writeHead(200, {'Context-type' : 'text/html'});
    res.end('<h1>  Hello World...</h1>');
}).listen(3000, function(){
    console.log(__filename)
    console.log('Server running at port 3000')
});
