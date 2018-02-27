// ===== module ======
var express = require('express')
  , http = require('http')
  , path = require('path');
  
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parse');
var expressSession = require('express-session');
var expressErrorHandler = require('express-error-handler');

var app = express();

app.set('port', process.env.PORT || 3000 );
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({extended: true}));

app.use(cookieParser());
app.use(expressSession({
    secret: 'My key',
    resave: true, 
    saveUninitialized: true
}));

var errorHandler = expressErrorHandler({
    static: {
        '404': './public/404.html'
    }
}); 

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);

http.createServer(app).listen(app.get('port'), function(){
    console.log('서버가 시작되었다. 포트 : ' + app.get('port'));
});
