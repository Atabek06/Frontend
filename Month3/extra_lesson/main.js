const  arrLength= 3;


const promise = new Promise((resolve, reject) =>{
    const arr =[1,2,3];
    if (arrLength == arr.length){
        resolve(arr)
    }else{
        reject()
    }
})

const onFUlfilled = (arr) => console.log(arr);
const onReject = () => console.log("ошибка")

promise.then(onFUlfilled, onReject)