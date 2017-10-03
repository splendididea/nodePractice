/**
 * ejs 모듈 메서드 
 * render(str, data, option)    ejs 문자열을 html 문자열로 변경한다. 
 */

const http = require('http');
const ejs = require('ejs');
const fs = require('fs');

http.createServer(function(req, res){
    // ejsPage 파일을 읽어온다 .
    // 반드시 utf8로 인코딩 하여야 한다. 
    fs.readFile('ejsPage.ejs', 'utf8' , function(err, data){
        res.writeHead(200, {'Content-Type' : 'text/html'});
        res.end(ejs.render(data, {
            name : 'RintIanTta' ,
            description : 'Hello ejs with Node.js..!'
        }));
    });
}).listen(3000, function(){
    console.log('Server is running at port 3000');
});