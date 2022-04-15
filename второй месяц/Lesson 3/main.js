const a = "1";
let b = 2;

for (let key of []){
    console.log(key)
}

while(1 < 0){

}

if(a === b){

}

// function sayhello(){
//     console.log("Hello!")
// }
//
// sayhello();

function getfullname(user, age){
    if (age < 18){
        console.log("close")
    }else{
        console.log("open")
    }
}

const user = {
    first_name: "John",
    last_name: "Kia"
}
const user2 = {
    first_name: "Aktan",
    last_name: "Batman"
}
const user3 = {
    first_name: "Atabek",
    last_name: "super_rovno"
}
getfullname(user, 20);
getfullname(user, 18);
getfullname(user, 15);

// console.log(user.first_name, user.last_name); неправильно
// console.log(user2.first_name, user.last_name); неправильно
// console.log(user3.first_name, user.last_name); неправильно


