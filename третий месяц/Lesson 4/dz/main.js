const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);



const send = document.querySelector('.send')

function sendUserInfo () {
    const xhr = new XMLHttpRequest();

    const name = document.querySelector('.name').value
    const username = document.querySelector('.username').value
    const email = document.querySelector('.email').value
    
    if(name.trim() && username.trim() && email.trim()){
        const userinfo = {
            name: name,
            username: username,
            email: email
        }

        xhr.open('POST', url)

        xhr.responseType = 'json'

        xhr.onload = function() {
            const xhrobjs = xhr.response
            document.getElementById('tabl').innerHTML += `
                <div class="obj__block">
                    <ul>
                        <li>
                            <h2 class="name">${xhrobjs.name}</h2>
                        </li>
                        <li>${xhrobjs.username}</li>
                        <li>${xhrobjs.email}</li>
                    </ul>
                </div>
            `
        }

        xhr.setRequestHeader('Content-Type', 'application/json')

        xhr.send(JSON.stringify(userinfo))
    } else {
        alert('Заполните все поля')
    }



}

send.addEventListener('click', sendUserInfo)

xhr.send()

