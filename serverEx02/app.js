const http = require('http');
const fs = require('fs');


var imgServer = http.createServer(function(request, response){
    fs.readFile('yumi.jpeg',function(err, data){
        if(err) console.log('파일 읽는 중 에러 발생 : ' ,  err);
        console.log(data);
        response.writeHead(200, {'Content-Type' : 'image/jpg'});
        response.end(data);
    });
});
var MusicServer = http.createServer(function(request, response){
    fs.readFile('dsdfsdfsdf',(err, data)=>{
        response.writeHead(200, {'Content-Type' : 'audio/mp3'});
        response.end(data);
    });
});

imgServer.listen(25501, function(){
    console.log('imgServer is starting at 25501');
});

