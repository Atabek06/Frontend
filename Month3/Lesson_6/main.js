//CRUD  Это 4 основных операций работ с базами данных
const URL = 'https://jsonplaceholder.typicode.com/users';

const searchName = document.getElementById('searchUserName');
const searchEmail = document.getElementById('searchEmail');
const searchBtn = document.getElementById('searchBtn');

fetch(URL).then(response => response.json()).then(data => console.log(data))

const searchUser = () => {
    if (searchName.value === "" || searchEmail.value === ""){
        alert("Введите данные")
    }else {
        fetch(`${URL}?Username=${searchName.value}&email=${searchEmail.value}`)
            .then(response => response.json())
            .then(data => console.log(data))
    }
}

searchBtn.addEventListener("click", searchUser)