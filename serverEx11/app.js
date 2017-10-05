/**
 * forever 모듈 
 * forever stop 0
 * forever list 
 * 
 * 
 */

const http = require('http')

http.createServer(function(request, response){
    response.writeHead(200, {'Content-Type' : 'text/html'})
    if(request.url == '/'){
        console.log('here i am');
        response.write('<!DOCTYPE html>');
        response.write('<html>');
        response.write('<head>');
        response.write('    <title>Forever Test</title>');
        response.write('</head>');
        response.write('<body>');
        response.write('    <h1>Forever</h1>');
        response.write('</body>');
        response.write('</html>');
        response.end();
    } else {
        error();
    }
}).listen(3000,function(){
    console.log('Starting server at port 3000');
});