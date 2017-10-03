var uncaughtListenerException = function(e){
    console.log('예외 발생 !!', e);

    // 연결된 이벤트 제거 
    process.removeListener('uncaughtException',uncaughtListenerException);
}

// 프로세스 객체에 uncaughtException 메서드에 uncaughtListenerException를 연결 
process.on( 'uncaughtException'  ,uncaughtListenerException );

var test = function () {
    setTimeout(test, 2000);
    error();
}
setTimeout(test, 3000);

