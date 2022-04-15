// console.log('Hello world');

// alert('Hello World')
// prompt('Enter some information')
// confirm('Do you like our web site?')

// Типы данных:

//number - цифры пишутся без ковычек
//string - строка "" пишутся в ковычках
//boolean - true/false 
//BigInt - для больших чисел
//indefined - не найдено, нет значения
//symbol - символы
//null - пустота
//object - обьекты

// + - = /   математические операторы
// = - присваивоние значения
// == - равно
// === - супер равно
// > - больше
// < - меньше
// >= - больше или равно
// <= - меньше или равно
// && - и
// || - или 
// !== - не равно
// % - остаток от деления


// переменные - хранилище данных
// let
// var
// const

// let user 
//     user = 2 + 3,
//     aplle = 5;


// let UserName = 5;

// console.log(2 + '2');
// console.log(2 + 2);

// let num = 'aplle'
// let num2 = 'melon'

// alert(num == num2)


// let student = prompt('Введите свои возраст')
// let teacher = prompt('Введите свои возраст')
// if(student == teacher){
//     alert('Одинаковый возраст')
// }else if(teacher > student) {
//     alert('Преподаватель старше студента')
// }else{
//     alert('Студент старше перподавателя')
// }



// let user = +prompt('В каком году появился коронавирус?')
//Этно скрипт 5

// if(user == 2019){
//     alert('верно')
// }else if(user !==2019){
//     alert('нет он появился в 2019 году!')
// }else{
//     alert('NONE')
// }

//Этноскрипт 6
// user == 2019 ? alert('right') : alert('NONE')


// если меньше или больше 18 тогда "wellcome"
// а если 18 то "not for you"

let user = +prompt('Ваш возраст')
if(user > 18 || user < 18){
    alert('wellcome')
}else if(user == 18){
    alert('not for you')
}


