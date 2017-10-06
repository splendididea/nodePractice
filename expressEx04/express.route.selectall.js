var express = require('express');

var app = express();

app.get('/index', function(request, response){
    response.send('<h1>Index Page</h1>');
}); 

app.all('*', function(request, response){
    response.status(404).send('<h1>ERROR - Page Not Found </h1>')
});

app.listen(3000, function(){
    console.log('Server Running at 3000');
});