//Task 1

const URL = 'https://jsonplaceholder.typicode.com/users'
const get = document.getElementById('getBtn')
function getUser(){
    console.log(`${URL}`)
    fetch(`${URL}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }else {
                return `Ошибка ${response.status}`
            }
        }).then(data => {
            const div = document.getElementById('list')
            console.log(data)
            data.forEach(e => {
                div.innerHTML += `
                        <ul>
                            <p>Name:${e.name}</p>
                            <li>Id: ${e.id}</li>
                            <li>Username: ${e.username}</li>
                            <li>Email: ${e.email}</li>
                        </ul>
                `
            })

    })
}
get.addEventListener('click', getUser)

//Task 2


const URL2  = 'https://jsonplaceholder.typicode.com/users'
const postBtn = document.getElementById('postBtn')
const data = {
    name: 'Harry',
    username: 'Harry Potter',
    email: 'HarryPotter@gmail.com'
}
let post = {
    method: 'POST',
    headers: {
        'Content-type': 'application/json'
    },
    body: JSON.stringify(data)
}
function postUser(){
    fetch(URL2, post)
        .then(response => {
            if (response.ok === true){
                return response.json()
            }else  if (response.ok === false){
                return 'Error' + response.status
            }


        })

        .then(data => JSON.stringify(data))
}
postBtn.addEventListener('click',postUser)