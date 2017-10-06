const express = require('express');

var app = express();

app.use(function(request, response, next){

    var agent = request.header('User-Agent');

    if(agent.toLowerCase().match(/chrome/)){
        // 페이지 출력 
        response.send('<h1>Hello Chrome</h1>');
    } else {
        response.send('<h1>Hello express ...</h1>');
    }
});

// 서버 실행 
app.listen(3000, function(){
    console.log('Server Running at 3000');
});


