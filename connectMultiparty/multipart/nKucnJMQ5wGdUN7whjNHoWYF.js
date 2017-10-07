/**
 * File System 모듈 
 * readFile(file, encoding, callback )  파일을 비동기로 읽는다.  
 * readFileSync(file, encoding)         파일을 동기로 읽는다. 
 * writeFile(file, data, encoding, callback) 파일을 비동기로 쓴다. 
 * writeFileSync(file, data , encoding) 파일을 동기로 쓴다. 
 */

const fs = require('fs');

let fs1 = fs.readFile('testFile.txt', 'utf8' ,function(err, data){
    console.log(data);
});

let fs2 = fs.readFileSync('testFile.txt',  'utf8');
console.log(fs2);

var data = 'Hello I\'m trying to write file with fs.js ';
fs.writeFile('TextTest.txt' , data, function(err){
    console.log('Write File sync Complete');
});

fs.writeFileSync('TextTest2.txt' , data , 'utf8');

try {
    var data = fs.writeFileSync('textFile3.txt', 'Hello this is test about fs sync in the file ','utf8');
    console.log(data);
} catch(e) {
    console.log(e);
}
