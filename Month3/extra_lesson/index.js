const URL = 'https://jsonplaceholder.typicode.com/users';

async function getUsers (){
    const  response = await fetch(URL);

    if(response.status == 404){
        return response.status
    }
    else{
        const data = await response.json()
        return data
    }
}

const onFulfilled = (users) => console.log((users))
const onReject = (statusError) => console.log(statusError);

getUsers().then(onFulfilled).catch(onReject)