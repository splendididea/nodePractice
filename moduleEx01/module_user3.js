var user3 = require('./user3');
function getUserInfo(){
    return user3.getUser().name;
}
console.log(getUserInfo())