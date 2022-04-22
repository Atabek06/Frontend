const URL = 'https://jsonplaceholder.typicode.com/posts';

let options = {
     method: "GET",
    headers:{
        "Content-Type": "application/json"
    },
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