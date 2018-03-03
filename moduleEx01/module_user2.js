var users = require('./user2');
console.dir(users);
function getUserInfo(){
    return users.getUser().name;
}
console.log(getUserInfo())