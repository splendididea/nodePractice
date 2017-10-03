/**
 * 6.3.3 쿠키 생성 
 * 쿠키는 키와 값이 들어 있는 작은 데이터 조각 
 * 이름, 값, 파기 날짜 경로 정보가 들어가 있다.
 * 로그인 상태를 일정 시간 유지해야하는 사이트에서 사용한다. 
 * 
 * response 객체를 사용하면 클라이언트에 쿠키를 할당 할 수 있다. 
 * 이때는 응답 헤더의 Set-Cookie 속성을 사용한다. 
 * Set-Cokkie 속성에는 다음과 같은 문자열 형태로 이루어진 쿠키 배열을 넣는다.
 * Name = Value; Expires = 날짜; Domain = 도메인; Path = 경로 ; Secure 
 */

 var http = require('http');

 http.createServer(function(request, response){
    var date = new Date();
    date.setDate(date.getDate() + 7);
    response.writeHead(200, {
        // Expires 를 사용하고 싶다면 Set-Cookie속성에 추가하면 된다. 
        'Content-Type' : 'text/html'
        ,'Set-Cookie' : [
            'breakfast = toast;Expires='+date.toUTCString() ,
            'dinner = chicken' ,
        ]
    });
    response.end('<h1>'+request.headers.cookie+'</h1>');
 }).listen(3000,function(){
     console.log('Node Server is Starting at port 3000')
 });