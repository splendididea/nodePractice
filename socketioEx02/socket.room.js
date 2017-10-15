// 모듈 추출 
// 서버를 생성 
var fs = require('fs');
var server = require('http').createServer();
var io = require('socket.io').listen(server);

server.listen(3000, function(){
    console.log('Server Running at localhost 3000');
});

// 웹 서버 이벤트 연결 
server.on('request', function(request, response){
    fs.readFile('HTMLPage.html', function(err, data){
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    });
});

// 소켓 서버 이벤트를 연결 
io.sockets.on('connection', function(socket){
    // 방 이름을 저장할 변수 
    var roomName = null;

    // join 이벤트
    socket.on('join', function(data){
        roomName = data;
        console.log('roomName :: ' + roomName);
        socket.join(data);
    });

    // messeage 이벤트 
    socket.on('message',function(data){
        console.log('message data :: ' + data);
        console.log('message roomName:: ' + roomName);
        io.sockets.in(roomName).emit('message','test');
    });
});
