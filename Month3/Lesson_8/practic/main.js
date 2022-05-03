const getUsersBtn = document.getElementById('getUsers');
const inf = document.getElementById('inf')
const URL = 'https://jsonplaceholder.typicode.com/users';

async function getUsers(){
    const response = await fetch(URL);
    const data = await response.json();
    console.log(data)
    data.forEach(element => {
        inf.innerHTML += `<div>${element.name}</div>`
    })

}
getUsersBtn.addEventListener('click', getUsers)