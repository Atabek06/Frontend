// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arr[8])
// const mass = ["a","b","c","d","e"];
// console.log(mass[2])
//
// let obj = {
//     username: 'John',
//     followers: [
//         {
//             username: "John"
//         },
//         {
//             username: "Aidana",
//             followers: [
//                 {
//                     username: 'Jack'
//                 },
//                 {
//                     username: 'joe'
//                 },
//                 {
//                     username: 'john'
//                 }
//             ]
//
//         },
//         {
//             username: 'joe'
//         }
//     ]
// };
// console.log(obj.followers[1].followers[2].username)
const array = [
    {
        username: "Jack",
        full_name: 'Jack kyrgyz'
    },
    {
        username: "Joe",
        full_name: "Joe kyrgyz"
    },
    {
        username: "Vito",
        full_name: "Vito kazakh"
    },
    {
        username: "Vito",
        full_name: "Vito kazakh"
    },
    {
        username: "Vito",
        full_name: "Vito kazakh"
    },
];
// console.log(array[0].username, array[0].full_name)
// console.log(array[1].username, array[1].full_name)
// console.log(array[2].username, array[2].full_name)
// console.log(array[3].username, array[3].full_name)
// console.log(array[4].username, array[4].full_name)
for(let i = 0; i < array.length; i++){
    console.log(array[i])
}
const obj = {
    key1: 'b1',
    key2: 'b2',
    key3: 'b3',
    key4: 'b4',
    key5: 'b5',
    key6: 'b6',
    key7: 'b7',
    key8: 'b8',
    key9: 'b9',
    key10: 'b10'
}
for (let key in obj){
    console.log(key + ':' + obj[key])
}
// let i = 0
// while(i < 5){
//     console.log("hello");
// }
const users = [
    {
        username: 'Jack',
        salary: 500
    },
    {
        username: 'john',
        salary: 5000
    },
    {
        username: 'vito',
        salary: 10000
    }
];
const filteredUsers = [];
for(let user of users){
    if(user.salary > 500 ){
        filteredUsers.push(user)
    }
}
console.log(filteredUsers)
