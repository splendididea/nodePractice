

const express = require('express')
// 서버를 생성
var app = express();
app.use(function(req, res){

    // 데이터를 생성 
    var output = [];
    for(var i = 0;i<10;i++){
        output.push({
            count : i, 
            name : 'name - ' + i
        })
    }

    res.send(output);
});

app.listen(3000, function(){
    console.log('express server Running at 3000 port ');
});