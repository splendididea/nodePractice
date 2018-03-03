// ===== module ======
var express = require('express')
  , http = require('http')
  , path = require('path');
  
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var expressSession = require('express-session');
var expressErrorHandler = require('express-error-handler');
var mongodb = require('mongodb');

var app = express();

var database;

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
        '404': './mongoEx02/public/404.html'
    }
}); 

app.use(expressErrorHandler.httpError(404));
app.use(errorHandler);


function connectDB() {
    // 데이터베이스 연결
    var databaseURL = 'mongodb://localhost:12345/shopping';
    mongodb.connect(databaseURL, function(err, db){
        console.log('데이터 베이스에 연결되었습니다 :: ' + databaseURL);
        // database 변수에 할당 
        database = db;
    });
};

var authUser = function(database, id, password, callback) {
    console.log('authUser call');
    var users = database.collection('users');
    var query = {"id": id, "password": password};
    users.find(query).toArray(function(err, docs){
        if(err){
            callback(err, null);
            return;
        }
        if(docs) {
            callback(null, docs);
        } else {
            callback(null, null);
        }
    });
};

app.post('/process/login', function(req, res){
    console.log('/process/login 호출됨');
    var paramId = req.param('id');
    var paramPassword = req.param('password');

    if(database) {
        authUser(database, paramId, paramPassword, function(err, docs){
            if(err) { throw err; }
            if(docs) {
                console.dir(docs);
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
                res.write('<h1>로그인 성공</h1>');
                res.write('<div><p></p></div>');
                res.write('<h1></h1>');
                res.end();
            } else {
                res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
                res.write('<h1>로그인 실패</h1>');
                res.end();
            }
        });
    } else {
        console.log('fail to connect Mongodb');
        res.writeHead(200, {'Content-Type': 'text/html;charset=utf8'});
        res.write('<h1>Fail to Connect MONGODB</h1>');
        res.end();
    }
});

http.createServer(app).listen(app.get('port'), function(){
    console.log('Server is Stating port 3000 : ' + app.get('port'));
});

var addUser = function(database, id, password, name, callback) {
    console.log('add User 호출');

    var users = database.collection('users');
    users.insert([{"id": id, "password": password, "name": name }], function(err, result){
        if(err){
            callback(err, null);
            return;
        }

        console.log('사용자 데이터 추가');
        callback(null, result);
    });
}

app.post('/process/addUser', function(req, res){
    var paramId = req.param('id');
    var paramPassword = req.param('password');
    var paramName = req.param('name');

    if(database) {
        addUser(database, paramId, paramPassword, paramName, function(err, result){
            if(err) {throw err;}

            if(result) {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 성공</h2>');
                res.end();
            } else {
                res.writeHead('200', {'Content-Type':'text/html;charset=utf8'});
                res.write('<h2>사용자 추가 실패</h2>');
                res.end();
            }
        });
    } else {
        res.writeHead(200, {'Content-Type':'text/html;charset=utf8'});
        res.write('<h2>fail to connect DATABASE</h2>');
        res.end();
    }
}); 




