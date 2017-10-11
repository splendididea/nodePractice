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
/**
 * 소켓 통신 종류 
 * public            자신을 포함한 모든 클라이언트에 데이터 전달 
 * broadcast         자신을 제외한 모든 클라이언트에 데이터 전달
 * private           특정 클라이언트에 데이터 전달 
 */
var id = 0;
var io = socketio.listen(server);
io.sockets.on('connection', function(socket){
    // id를 설정
    id = socket.id;

    // rint 이벤트 
    socket.on('make', function(data){
        // 클라이언트가 전송한 데이터를 출력
        console.log('Client Send Data : ', data);

        // 클라이언트에 smart 이벤트를 발생
        // socket.emit('smart',data);
        // public 통신
        // io.sockets.emit('smart', data);              
        // broadcast 
        // socket.broadcast.emit('smart', data);
        // 
        io.sockets.to(id).emit('smart', data);
    });
});

