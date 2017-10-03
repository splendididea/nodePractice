
const http = require('http');
const fs = require('fs');

http.createServer(function(req, res){
    if( req.method == 'POST' ){
        req.on('data' , (data)=>{
            res.writeHead(200, {'Content-Type' : 'text/html'});
            res.end(data);
        });
    } else if( req.method == 'GET' ){
        fs.readFile('SENDType.html', (err, data)=>{
           res.writeHead(200, {'Content-Type' : 'text/html'});
           res.end(data); 
        });
    }
}).listen(3000, function(){

});