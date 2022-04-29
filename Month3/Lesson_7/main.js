// let age = 25;
//
// const userAge = prompt("Сколько вам лет?")

const promise = new Promise((resolve, reject) => {
    // setTimeout(() => {
    //     resolve('вы угадали мой возраст')
    // }, 1000)
    // setTimeout(() => {
    //     reject("хахаха вы не угадали")
    // }, 999)
    // if (userAge == age){
        resolve('вы угадали мой возраст')

    // }else{
    //     reject("хахаха вы не угадали")

    // }
})

const onFulFilled = (txt) => console.log('Успех ' + txt);

const onRejected = (txt) => console.log('ошибка ' + txt);

const onFinally = (txt) => console.log('я все равно отработаю')

promise.then(onFulFilled).catch(onRejected).finally(onFinally);

//1-then - успех (resolve)
//2-catch - ошибка (reject)
//3-finally - отработает в любом случае

const btn = document.getElementById('getUser')
const URL = 'https://jsonplaceholder.typicode.com/users';

const myFetch = (method, URL) => {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest()
        xhr.open(method, URL)
        xhr.onload = function (){
            if (xhr.status == 200){
                resolve(xhr.response)
            }else if(xhr.status == 404){
                reject(xhr.status)
            }
        }
        xhr.send()
    })
}

btn.addEventListener("click", () => {
    myFetch('GET', URL)
        .then(response => JSON.parse(response))
        .then(data => console.log(data))
        .catch(error => console.log(error))
})

