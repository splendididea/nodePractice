const os = require('os');

console.log(os.hostname());             // 운영체제의 호스트 네임 리턴
console.log(os.type());                 // 운영체제의 이름 리턴
console.log(os.platform());             // 운영체제의 플랫폼을 리턴 
console.log(os.arch())                  // 운영체제의 아키텍처 
console.log(os.uptime())                // 운영체제가 실행된 시간 
console.log(os.release());              // 운영체제의 버전 
console.log(os.freemem());              /// 시스템에서 사용 가능한 메모리 
console.log(os.networkInterfaces())     // 네트워크 인터페이스 정보 

