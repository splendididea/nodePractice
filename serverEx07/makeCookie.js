const http = require('http');

http.createServer(function(req, res){
    var cookie = req.headers.cookie;
    if(cookie){
        var cookieMap = cookie.split(';').map(function(element){
            var element = element.split('=');
            return {
                key : element[0] ,
                value : element[1]
            }
        });
        res.end(JSON.stringify(cookieMap));
    } else {
        res.writeHead(200, {'Content-Type' : 'text/html',
                            'Set-Cookie' : ['name = RintIanTta' , 'region = Seoul'] });
    }
}).listen(3000, function(){
    console.log('Server is Running at port 3000');
});