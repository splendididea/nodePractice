/**
 * 3.3 process 객체 
 * 
 * 프로그램과 관련된 정보를 나타내는 객체 
 * 
 * ## 속성
 * argv         실행 매개변수를 나타냅니다. 
 * env          컴퓨터 환경과 관련된 정보를 나타냅니다. 
 * version      Node.js 버전을 나타냅니다. 
 * versions     Node.js의 종속된 버전을 나타낸다. 
 * arch         프로세스 아키텍처를 나타냄
 * platform     플랫폼 노출 
 * 
 * ## 메서드
 * exit([exitCode = 0])     프로그램을 종료합니다. 
 * memoryUsage()            메모리 사용 정보 객체를 리턴합니다. 
 * uptime()                 현재 프로그램이 실행된 시간을 리턴합니다. 
 */

// process.argv
process.argv.forEach(function (item, index){
    // 출력 합니다. 
    console.log(index + ':' + typeof (item) + ' , ' + item );
    // 실행 매개변수에 --exit가 있을 때
    if(item == '--exit') {
        // 다음 실행 매개변수를 얻습니다. 
        var exitTime  = Number(process.argv[index + 1]);
        console.log(exitTime);
        // 일정 시간 후 프로그램 종료 
        setTimeout(function(){
            process.exit();
        }, exitTime);
    }
});

console.log('- process.env : ', process.env);
