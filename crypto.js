/**
 * 해시 
 * 일반적으로 프로그래밍 언어에서 해시라는 말이 나오면 2가지 의미 
 * 1. 키와 값을 갖는 자료형 : 대표적으로 자바스크립트 객체가 해시 
 * 2. 전자지문 
 * 단방향 hash코드를 만들어 암호화 처리 
 */
const crypto = require('crypto');
const filename = '1111';
console.log(filename);
const fs = require('fs');
const hash = crypto.createHash('sha512');
hash.update(filename);

var output = hash.digest('hex');
console.log(output);


// crypto 모듈을 사용한 암호화 
var key = '090909';
var input = 'PASSWORD';

var cipher = crypto.createCipher('aes192' , key);
cipher.update(input , 'utf8' , 'base65');
var cipherOutput = cipher.final('base64');

// 암호화 예제 
var decipher = crypto.createDecipher('aes192',key);
decipher.update(cipherOutput, 'base64', 'utf8');
var decipheredOuput = decipher.final('utf8');

console.log('원래 문자열 ::: ' , input);
console.log('암호화 :::  ' + cipherOutput);

//const input = fs.createReadStream(filename);

//console.log(input);





