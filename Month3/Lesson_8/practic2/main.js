

const searchAge = document.getElementById('yourAge');
const checkAge = document.getElementById('check')
let age = 25;

async function someGet(){
    const response = new Promise((resolve, reject) => {
        if (age == searchAge.value){
            resolve("вы угадали")
        }else {
            reject("вы не угадали")
        }
    })
    const answer = await response;
    return answer
}

checkAge.addEventListener('click', () => {
    someGet().then(txt => console.log(txt)).catch(txt => console.log(txt))
})
