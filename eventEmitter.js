/***
 * 이벤트를 연결할 수 있는 모든 객체는 eventEmitter 객체를 상속받는다. 
 * process 역시 eventEmitter를 상속받았기에 이벤트를 연결 할 수 있는것이다. 
 * 
 * EventEmitter process 객체 안에 있는 생성자 함수로 생성할 수 있는 함수 
 * 
 * ### EventEmitter 객체의 메서드 
 * addListener(eventName, eventHandler)         이벤트를 연결
 * on(eventName, eventHandler)                  이벤트를 연결
 * setMaxListners(limit)                        이벤트 연결 개수 조절
 * removeListener(eventName, handler)           특정 이벤트 리스너를 제거
 * removeAllListsners([eventName])              모든 이벤트 리스너를 제거
 * once(eventName, eventHandler)                이벤트를 한 번만 연결합니다. 
 */

 // eventEmitter를 연결 
 var custom = new process.EventEmitter();