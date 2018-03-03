exports = {
    getUser:  function(){
        return {id: 'user2', name: 'MINA'};
    }, 
    group: {id: 'group02', name: 'friends'}
}

/***
 * 위와 같이 작성을 하면 전역에 있는 exports 에 할당되지 않고 
 * exports 변수에 객체로 담겨서 참조할 수 없다. 
 */