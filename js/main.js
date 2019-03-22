"use strict";
//1
let a = 10;
    a = a++ + a++;
a--;
console.log(a);

//2
a = 7;// хранит количество студентов
let CourseNAME = "JavaScript"; // хранит название курса
const maxSTUDENTSamount = 10; // константа, максимальное количество студентов
console.log(CourseNAME);
console.log(maxSTUDENTSamount);

//3
// let  floor = prompt('Число будет округленно в Меньшую сторону сторону'),
//      ceil = prompt('Число будет округленно в большую сторону'),
//      result = Math.floor(+floor) / Math.ceil(+ceil);
//      console.log(Math.round(result));

/* 4: Написать код, который будет выводить максимум из ДВУХ чисел
 Подсказка в виде кода для минимума из двух чисел:*/

// let maxNumber, number3 = 10, number1 = 5, number2 = 3;
// maxNumber = Math.max(number1,number2);
// alert(maxNumber);
//
// //5
//
// maxNumber = Math.max(number1,number2,number3);
// alert(maxNumber);

//6
const COLOR = (function() {
    return {
        red : function() {
            return getRandomInt(180,255);
        },
        green : function() {
            return getRandomInt(150,255);
        },
        blue : function() {
            return Math.floor(0);
        }
    };
})();

function getColor(){
    return "rgb(" + COLOR.red() + ", " + COLOR.green() + ", " + COLOR.blue() + ")";
}
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
var html = document.getElementsByTagName("html")[0];
html.addEventListener("click", function() {
    html.style.backgroundColor = getColor();
});