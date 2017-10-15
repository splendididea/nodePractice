// 모듈 생성
var fs = require('fs');
var http = require('http');
var socketio = require('socket.io');

// 웹 서버 생성
var server = http.createServer(function (request, response) {
    fs.readFile('HTMLPage.html',function (error, data) {
        response.writeHead(200, {'Content-Type' : 'text/html'});
        response.end(data);
    })
}).listen(52273, function () {
    console.log('Server Running at port 52273');
});

var io = socketio.listen(server, function (socket) {
    // message 이벤트
    socket.on('message',function (data) {
        console.log(data);
        // 클라이언트 message 이벤트 발생
        io.sockets.emit('message', data);
    })
})
