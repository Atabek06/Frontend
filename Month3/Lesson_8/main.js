// let age = 12;
//
// const result = prompt("сколько вам лет?")
//
// async function getSome (param){
//     if (result == age){
//         return Promise.resolve("вы угадали возраст")
//     }else{
//         return Promise.reject("Вы ошиблись")
//     }
// }
//
// getSome().then(txt => alert(txt)).catch(txt => alert(txt))

// async function someGet(){
//     const response = new Promise((resolve, reject) => {
//         setTimeout(() => {
//             return resolve("я отработал")
//         }, 1000)
//     })
//
//     const answer = await response;
//
//     const answerTwo = await answer
//
//     console.log(answerTwo)
//     return answer
// }
// someGet()

const getUsersBtn = document.getElementById('getUsers');
const inf = document.getElementById('inf')
const URL = 'https://jsonplaceholder.typicode.com/users';

// async function getUsers(){
//     const response = await fetch(URL);
//     const data = await response.json();  //2-способ запроса
//     console.log(data)
// }

// fetch(URL).then(response => response.json()).then(data => console.log(data)) 1-способ запроса

async function getUsers(){
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    data.forEach(element => {
        inf.innerHTML += `<div>${element.name}</div>`
    })

}


getUsersBtn.addEventListener('click', getUsers)