const URL = 'https://jsonplaceholder.typicode.com/posts';
let post = {
    title: `new`,
    section:'sport'
}

let options = {
     method: "POST",
    headers:{
        "Content-Type": "application/json"
    },
    body: JSON.stringify(post)
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