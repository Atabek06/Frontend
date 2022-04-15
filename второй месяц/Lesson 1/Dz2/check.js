
let first_length = prompt('Введите длину первого массива')
 let last_length = prompt('Введите длину второго массива')
 if(first_length == last_length){
    alert('Одинаковая длина')
 }else if(first_length > last_length) {
     alert('длина у первого массива больше чем у второго!')
 }else{
     alert('длина у второго массива больше чем у первого!')
 }