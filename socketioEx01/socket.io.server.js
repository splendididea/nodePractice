// 모듈 추출 
var http = require('http');
var fs = require('fs');
var socketio = require('socket.io');

// 웹 서버 생성 
var server = http.createServer(function(request, response){
    // HTML 파일을 읽는다. 
    fs.readFile('HTMLPage.html',function(err, data){
        response.writeHead(200, {
            'Content-Type' : 'text/html'
        });
        response.end(data);
    });    
});

server.listen(3000, function(){
    console.log('Server Running at port 3000');
});

// 소켓 서버 실행 
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){

});

