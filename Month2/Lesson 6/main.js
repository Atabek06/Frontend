//ES5 vs ES6

//es6
// const a = 10;
//
// let b = 5;
// //es5
// var c = 20
//
// console.log(c)
// c = "hello";
//
// console.log(c)
//
// const first_name = 'Jack'
// const last_name = "barbara";
//
// // console.log(first_name + " " + last_name) //es5
//
// console.log(`${first_name} ${last_name}`);

// const getfullname = () => {
//     return "first name: " + user.first_name + "/n" + "last name:" + user.last_name
//     // return `first_name: ${user.first_name} /n last_name: ${user.last_name}`
// }
// const user = {
//     first_name: 'Jack',
//     last_name: 'barbara'
// }
//
// getfullname();
//
// //spread operator
//
// const mass = [1, 2, 3, 4, 5]
// const mass2 = [...mass]
//
// console.log(mass2)

// for(let i = 0; i < mass.length; i++){
//     mass2.push(mass[i])
// }
// console.log(mass2)

const obj = {
    username: 'jack',
    age: 19,
    last_name: "barbara",
    full_name: "jack barbara"
}
const obj2 = {
    ...obj,
    key: 'value',
    key2: 'value2'
}

console.log(obj2,obj)

//деструктивизация

// const props = {
//     onsubmit: () => {
//         console.log("submit")
//     },
//     data:[
//         {
//             key: 'value'
//         },
//         {
//             key: 'value'
//         },
//         {
//             key: 'value'
//         }
//     ]
// }
// const {data, onsubmit} = props;
// console.log(data)
// onsubmit();
