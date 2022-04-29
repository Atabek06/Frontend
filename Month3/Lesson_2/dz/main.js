const greeting = () => {
    console.log('hey yoo! wassup')
}
setTimeout(greeting,1000)

const btn = document.getElementById('button')
btn.addEventListener('click', function (){
    setTimeout(function (){
        console.log('How is it going?')
    },2000)
})

const btn1 = document.getElementById('button1')
btn1.addEventListener('click', function (){
    setTimeout(function (){
        console.log('How is life?')
    },3000)
})

const btn2 = document.getElementById('button2')
btn2.addEventListener('click', function (){
   setTimeout(function (){
        console.log("good buy, if i don't see you around, i'll see you square))")
    },4000)
})