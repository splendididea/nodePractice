const express = require('express');
const mysql = require('mysql');

var client = mysql.createConnection({
    user : 'mufasa',
    password : 'kr3557kr',
    database : 'COMPANY'
});

console.log(client);
// client.query('USE COMPANY');

client.query('SELECT * from PRODUCTS', function(error, result, fields){
    if(error) {
        console.log('쿼리문에 오류가 있습니다. ');
    } else {
        console.log(result);
    }
});

