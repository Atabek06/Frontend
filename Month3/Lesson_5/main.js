const URL = 'https://jsonplaceholder.typicode.com/users';

const user = {
    name: "Atabek",
    username: "Rysbekov",
    email: "abdjdhdbdj@gmail.com"
}

// let options = {
//      method: "POST",
//     headers:{
//         "Content-Type": "application/json"
//     },
//     body: JSON.stringify(user)
// }
let options = {
     method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
    // body: JSON.stringify(user)
}


fetch(URL, options)
   .then(response => {
        if (response.ok === true){
            return response.json()
        }else if (response.ok === false){
            return "Ошибка" + response.status
        }
})
    .then(data => console.log(data))

const userId = document.getElementById('userId');
const getBtn = document.getElementById('getUser');

function getUserHandle(){
    const id = userId.value;
    fetch(`${URL}/${id}`)
        .then(response => {
            if (response.ok){
                return response.json()
            }else{
                return `Ошибка ${response.status}`
            }
        }).then(data => console.log(data))
}

getBtn.addEventListener('click', getUserHandle)
