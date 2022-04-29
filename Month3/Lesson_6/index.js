const URL = 'http://localhost:3333/users' //POST,PATCH-указываем айдишник юзера

const userName = document.getElementById('searchUserName');
const name = document.getElementById('searchName');
const email = document.getElementById('searchEmail');
const btn = document.getElementById('searchBtn');

const createUser = () => {
    const data = {
        name: name.value,
        surname: userName.value,
        email: email.value
    }

    let option = {
        method: "POST", //PATCH,POST
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
    fetch(URL, option).then(response => response.json())
}
btn.addEventListener('click', createUser)