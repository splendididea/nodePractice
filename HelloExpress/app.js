/**
 * #### express 프레임워크 설정 
 * case sensitive routing         페이지 라우트를 할 때 대소문자를 구분할지 지정
 * env                            서버 환경을 지정
 * etag                           HTTP 헤더 Etag 속성을 지정 
 * jsonp callback name            JSONP를 사용할 때 콜백 이름을 지정
 * json replacer                  자바스크립트 객체를 JSON문자열로 변경할 때 사용하는 JSON.stringfy의 replacer 매개변수 지정
 * json spaces                    자바스크립트 객체를 JSON문자열로 변경할 때 사용하는 JSON.stringfy의 spaces 매개변수 지정
 * query parser                   입력된 쿼리를 파싱할 때 사용할 모듈을 지정 기본적으로 Query String 모듈 
 * strict routing                 엄격 경로 확정을 사용할지 지정
 * subdomain offset               서브 도메인을 추출하기 위해 사용할 오프셋
 * trust proxy                    신뢰할 수 있는 프록시를 지정
 * views                          뷰 폴더를 지정
 * view cache                     뷰 캐시를 사용할지 지정
 * view engine                    뷰 엔진을 지정
 * x-powered-by                   HTTP 헤더에 'X-Powered-By: Express'를 추가
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
