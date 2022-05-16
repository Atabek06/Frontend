const URL = 'https://jsonplaceholder.typicode.com/users';

const promise = new Promise((resolve, reject) =>{
    // setTimeout(() =>{
    //     resolve("success")
    // }, 1000)
    // setTimeout( () => {
    //     reject("error")
    // }, 1001)
})
const getUsers = () => {
    return new Promise((resolve, reject) => {
        const  xhr = new XMLHttpRequest();
        xhr.open('GET', URL)

        xhr.onload = () => {
            if (xhr.status === 200){
                resolve(xhr.response)
            }else if (xhr.status === 404){
                reject('ошибка ' +  xhr.status)
            }
        }

        xhr.send()
    })
}

const onFulfilled = (users) => console.log(JSON.parse(users));
const onReject = (error) => console.log(error);

getUsers().then(onFulfilled).catch(onReject)