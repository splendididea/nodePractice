const url = require('url');
const querystring = require('querystring');
/**
 * 4.2 url 모듈 
 * 
 */

var parsedObject = url.parse('http://hanbit.co.kr/store/books/look.php?p_code=B420257160');
var parsedObject2 = url.parse('http://hanbit.co.kr/store/books/look.php?p_code=B420257160', true);
console.log(parsedObject);
console.log(parsedObject2);
console.log(parsedObject2.query);

console.log('$$$$$$$$$$$$$$$$$');
var parsedQuery = querystring.parse(parsedObject.query);
console.log("parseQuery :: %j " , parsedQuery);
