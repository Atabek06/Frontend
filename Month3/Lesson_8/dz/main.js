const postUsersBtn = document.getElementById('postUsers');
const userName = document.getElementById('postUserName');
const name = document.getElementById('postName');
const email = document.getElementById('postEmail');
const URL = 'https://jsonplaceholder.typicode.com/users';

 async function PostUsers() {
    const data = {
        name: name.value,
        username: userName.value,
        email: email.value
    }
  const option = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }
  const response = await fetch(URL, option);
    const DATA = await response.json();
    console.log(DATA)

}

postUsersBtn.addEventListener('click', PostUsers)




