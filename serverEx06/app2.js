/**
 * 6.4.2 method 속성을 사용한 페이지 구분 
 * request 객체의 method 속성을 사용하여 페이지 구분을 한다. 
 */
// 모듈을 추출
 var http = require('http');
 var url = require('url');
 // 서버 생성 
 http.createServer( function(req, res){
    console.log(req.method);
    // 아쉽게도 POST요청 결과를 url로 수행 할 수가 없다. 
    // 매개 변수를 추출 해야한다. 

    // POST 방식은 request이벤트 발생 이후 request 객체의 data 이벤트로 데이터가 전달된다. 
    var query = url.parse(req.url, true).query;
    if( req.method == 'POST' ) {
        console.log('POST 요청입니다.');
    } else if (req.method == 'GET') {
        res.writeHead(200, {'Content-Typt' : 'text/html'});
        res.end('<h1>' + JSON.stringify(query) + '</h1>');
        console.log('GET 요청입니다. ');
    }
    // 서버 실행 
 }).listen(3000, function(){
    console.log('Server is Starting at port 3000');
 });