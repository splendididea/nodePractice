/**
 * 클라이언트에게 웹페이지를 제공해주기 위해선 
 * 응답 메시지가 필요하다 
 * 응답 메시지는 response 객체를 사용한다. 
 * 
 */
var http = require('http');
const server = http.createServer(function(request, response) {
    response.writeHead(200, {'Context-Type' : 'text/html'});
    response.end('<h1>hello Web Server Node js</h1>')
}).listen(15522, function(){
    console.log('Server Running at 15522');
});