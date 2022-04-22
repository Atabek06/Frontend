const url = 'https://jsonplaceholder.typicode.com/users';

const xhr = new XMLHttpRequest();

xhr.open('GET', url);

xhr.onload = function setToDom() {
    const xhrobjs = JSON.parse(xhr.response)
    xhrobjs.forEach(xhrobj => {
        document.getElementById('tabl').innerHTML += `
            <div class="obj__block">
                <ul>
                    <li>
                        <h2>${xhrobj.name}</h2>
                    </li>
                    <li>${xhrobj.username}</li>
                    <li>${xhrobj.email}</li>
                    <div class="adress">
                        <h3 class="adress">Adress:</h3>
                        <ul>
                            <li>${xhrobj.address.street}</li>
                            <li>${xhrobj.address.suite}</li>
                            <li>${xhrobj.address.city}</li>
                            <li>${xhrobj.address.zipcode}</li>
                        </ul>
                    </div>
                </ul>
            </div>
        `
    })
}
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
                        <li>${xhrobjs.name}</li>
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

