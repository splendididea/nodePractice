console.log('__dirname  :: '  + __dirname);
console.log('__filename :: ' + __filename);
console.log('23333');

/**
 * 3.2 전역객체 
 *  console 콘솔 화면과 관련된 기능을 다루는 객체 
 *  exports 모듈과 관련된 기능을 다루는 객체
 *  process 프로그램과 관련된 기능을 다루는 객체 
 */


 // 3.2 console 객체 
 /**
  * log()  출력합니다. 
    time() 시간 측정을 시작합니다. 
    timeEnd() 시간 측정을 종료합니다. 

    %d 숫자
    %s 문자열
    %j JSON

  */

console.log('output : %d',4);
console.log('%d + %d = %d',273, 54)

console.time('alpah');
var result = 0;
for(var i=0;i<100;i++){
    result = result + i;
}
console.log(result);
console.timeEnd('alpah');






