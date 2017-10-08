/**
 * REST ful 서비스 구조
 *                /collection                  /collection/:id 
 * GET            컬렉션을 조회                   컬렉션 특정 요소 조회
 * POST           컬렉션 새로운 데이터 추가          사용하지 않는다. 
 * PUT            컬렉션 전체를 한꺼번에 변경         컬렉션 특정 요소 변경
 * DELETE         컬렉션 전체를 삭제                컬렉션 특정 요소 삭제 
 */

 const fs = require('fs');
 const express = require('express');
 const bodyParser = require('body-parser');

 // 더미 데이터 베이스를 구현
 var DummyDB = (function(){
    // 변수 선언 
    var DummyDB = {};
    var storage = [];
    var count = 1;

    // 메서드를 구현
    DummyDB.get = function(id) {

        console.log('### id :: ' + id)
        if(id){
            // 변수를 가공한다. 
            id = (typeof id == 'string') ? Number(id) : id;

            // 데이터를 선택한다. 
            for(i in storage) if(storage[i].id == id) {
                return storage[i];
            } 
        } else {
            console.log('inside of get :: ' + storage);
            return storage;
        }
    };

    DummyDB.insert = function(data) {
        data.id = count++;
        storage.push(data);
        return data;
    };

    DummyDB.remove = function(id){
        // 변수를 가공한다. 
        id = (typeof id == 'string') ? Number(id) : id;

        // 제거한다. 
        for(var i in storage) if (storage[i].id == id) {
            // 데이터를 제거 
            storage.splice(i, 1);
            // 리턴한다 : 데이터 삭제 성공
            return true;
        } 
        // 데이터 삭제 실패
        return false;
    };
    //리턴합니다. 
    return DummyDB;
 })();


 // 서버 생성
 var app = express();

 app.use(bodyParser());

 // 라우터 설정 
 app.get('/user' , function(request, response){
    response.send(DummyDB.get());
 });

 app.get('/user/:id', function(request, response){
    response.send(DummyDB.get(request.params.id));
 });

 app.post('/user',function(request, response){
    // 변수를 선언
    var name = request.body.name;
    var region = request.body.region;

    // 유효성 검사
    if(name && region){
        response.send(DummyDB.insert({
            name : name, 
            region : region
        }));
    } else {
        throw new Error('error');
    }
 });
 
 app.put('/user/:id' , function(request,response){
     // 변수 선언
     var id = request.params.id;
     var name = request.body.name;
     var region = request.body.region;

     // 데이터베이스를 수정
     var item = DummyDB.get(id);
     item.name = name || item.name;
     item.region = region || item.region;
     // 응답
     response.send(item);
 });

 app.delete('/user/:id',function(request,response){
    DummyDB.remove(request.params.id);
 });

 app.listen(57223, function(){
     console.log('Server Running at port 57223');
 });