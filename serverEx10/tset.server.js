/**
 * supervisor는 서버 소스를 변경했을때 
 * 서버를 다시 시작해야하는 번거로움을 제거해주고 
 * 모듈이 알아서 재시작을 시켜 준다. 
 */
 const http = require('http')
 http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'});
    response.end('Hello Supervisor-------2');
 }).listen(3000, function(){
    console.log('Server is Starting at port 3000 ');
 });