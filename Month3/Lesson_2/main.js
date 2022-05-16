
// setTimeout(function (){
//     console.log("start 3")
// }, 2000 ) //1000 1 секунда
//
// setTimeout(function (){
//     console.log("start 4")
// }, 2000 )
//
// console.log("start")
//
// const someFunc = () => {
//     console.log("start 1")
//
//     // throw Error()
// }
//
// const someFunctwo = () => {
//     console.log("start 2")
// }
//
// someFunc();
// someFunctwo();
//
// console.log("end")
//
// console.log("Hi!");
//
// setTimeout(function timeout() {
//     console.log("Click the button!");
// }, 5000);
//
// setTimeout(function timeout() {
//     console.log("Click the button!!");
// }, 3000);// что быстрее закончиться, то и будет стоять первым
//
//
// console.log("Welcome to loupe.");

// const btn = document.getElementById('button')
// function button(){
//     console.log("you clicked the button!")
// }
// btn.addEventListener('click', button);
//
// const btn2 = document.getElementById('button2')
// function button2(){
//     console.log("you clicked the button2!")
// }
// btn2.addEventListener('click', button2);
//
// const btn3 = document.getElementById('button3')
// function button3(){
//     console.log("you clicked the button3!")
// }
// btn3.addEventListener('click', button3);
//
// $.on('button', 'click', function onClick() {
//     setTimeout(function() {
//         console.log('Hello world!');
//     }, 2000);
// }); //функция внутри функций

const start = document.getElementById('start');
const countPlace = document.getElementById('count')

let count = 0;
//
start.addEventListener('click', function (){
    // const id = setTimeout(function (){console.log("hello")},1000);
    // const id2 = setTimeout(function (){console.log("hi")}, 2000);

   const id = setInterval(function (){
    // count = count + 1;
    // count -= 1;
    count += 1;
    console.log(count);
    countPlace.textContent = count
       if (count === 3){
        clearInterval(id)
        console.log("hello")
    }
}, 1000)
})


