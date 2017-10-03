/**
 * HTTP Status Code 예
 * Http Status Code 
 * 1XX  처리 중                 100 Continue
 * 2XX  성공                   200 OK
 * 3XX  리다이렉트               300 Multiple Choices
 * 4XX  클라이언트 오류           400 Bad Connection
 * 5XX  서버 오류               500 Internal Server Error
 */

var http = require('http');

http.createServer(function(reqeust, response){
    response.writeHead(302, {'Location' : 'http://naver.com'});
    response.end();
}).listen(3000, function(){
    console.log('Server Running at port 3000');
});