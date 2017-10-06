const express = require('express');

var app = express();

app.use(function(req, res,next){

    res.status(404).send('<h1>Error Page 404</h1>');
});

app.listen(3000, function(){
    console.log('Server Running at 3000 port ');
})

