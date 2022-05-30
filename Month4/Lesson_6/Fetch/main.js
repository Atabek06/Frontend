const URL = 'https://jsonplaceholder.typicode.com/users';
const getUserBtn = document.getElementById("getUsers");

const data = {
    name: "Atabek",
    email: "abdjdhdbdj@gmail.com"
}

const createUser = () => {
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, options).then(response => console.log(response))
}

// const getUsers = () => {  получить пользователя
//     fetch(URL)
//     .then(response => response.json())
//     .then(data => console.log(data));
// }

getUserBtn.addEventListener('click', createUser)
