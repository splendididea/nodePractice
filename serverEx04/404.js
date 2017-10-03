var http = require('http');

http.createServer((req, res) =>{
    res.writeHead(404 , {
        'Content-Type' : 'text/html'
    });
    res.end();
}).listen(3000,function(){
    console.log('Server is Running at port 3000');
});