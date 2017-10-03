/**
 * emit 이벤트 
 * 이벤트 강제 발생 
 * emit(eventName , ) 
 */
 process.on('exit', (code) => {
    console.log('Good bye!!!');
 });
 // emit으로 이벤트를 강제로 실행해도 종료 되지 않는다. 
 process.exit();
 process.emit('exit');

console.log('프로그램 실행중 !!!');