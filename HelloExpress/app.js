/**
 * #### express 프레임워크 설정 
 * case sensitive routing         페이지 라우트를 할 때 대소문자를 구분할지 지정
 * env                            서버 환경을 지정
 * etag                           HTTP 헤더 Etag 속성을 지정 
 * jsonp callback name            
 * json replacer
 * json spaces
 * query parser
 * strict routing 
 * subdomain offset
 * trust proxy
 * views
 * view cache
 * view engine 
 * x-powered-by
 */

// 외부 모듈을 추출
var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var router = express.Router();

// 사용자 정의 모듈 추출
var index = require('./routes/index');
var users = require('./routes/users');

// 서버 생성 
var app = express();

// view engine setup
// 서버 설정 
app.set('case sensitive routes', true);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
// 미들웨어 설정 
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
  secret : 'secret key',
  resave : false, 
  saveUninitialized : true
}));

// 라우터 미들웨어를 설정 
app.use('/', index);
app.use('/users', users);

/* GET home page */
router.get('/',function(req, res, next){
  res.render('index', {title : 'Express'});
});

module.exports = router;

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

// 모듈화 한다. 
module.exports = app;
