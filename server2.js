/**
 * 서버 객체의 이벤트 
 * request                      클라이언트가 요청시 발생 이벤트
 * response                     클라이언트가 접속할 때 발생 이벤트
 * close                        서버가 종료될 때 발생 이벤트
 * checkContinue                클라이언트가 지속적인 연결을 하고 있을때 발생 이벤트
 * upgrade                      클라이언트가 http 업그레이드 요청할 때 발생 이벤트
 * clientError                  클라이언트에서 오류 발생시 이벤트
 */

 var http = require('http');

 // server 객체를 생성 
 var server = http.createServer();

 // server 객체에 이벤트를 연결 
 server.on('request' , (code) =>{
    console.log('Request On');
 });


 server.on('connection', function(code){
    console.log('Connection On');
 });

 server.on('close', (code) => {
    console.log('Connection Close');
 });

 // listen() 메서드를 실행합ㄴ디ㅏ.
 server.listen(3000);


 