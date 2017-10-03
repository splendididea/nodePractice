const http = require('http');
const fs = require('fs');

http.createServer(function(request, response){
    // HTML 파일을 읽는다. 
    fs.readFile('HTML.html', function(err, data){
        response.writeHead(200, {'Context-Type' : 'text/html'});
        response.end(data);
    });
}).listen(3000, function(){
    console.log('Node server at 3000');
});