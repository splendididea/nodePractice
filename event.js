process.on('exit', (code) => {
    console.log('process 객체의 exit 메서드 연결 ');
});

// process 객체의 uncaughtException 이벤트 연결 
process.on('uncaughtException', (e) => {
    console.log('예외가 발생함 !!!!',e);
});

var count = 0;
var test = (code) => {
    count = count + 1;
    if( count > 3 ) {return;}

    // 예외를 강제로 발생시킨다. 
    setTimeout(test, 3000);
    error.error.error();
}
setTimeout(test, 2000);
