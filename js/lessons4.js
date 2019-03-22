let favouriteFilms = ["9 рота", "Т34", "Доспехи Бога"],
    planets = ["Меркурий","Венера","Земля","Марс","Юпитер","Сатурн","Уран","Нептун","Плутон"],
    deg =  [-3.5, -3, 1.8, 9.3, 15.5, 18.5, 20.5, 19.7, 14.2, 8.4, 1.9, -2.3],
    far = [];

favouriteFilms[3] = "Доспехи Бога 2";
favouriteFilms.push("Доспехи Бога 3");

console.log(favouriteFilms);
planets.pop();


for(let i = 0 ; i < planets.length; i++){
    console.log(planets[i]);
}
planets.reverse();
for(let i = 0 ; i < planets.length; i++){
    console.log(planets[i]);
}

deg.forEach(function (element) {
    let result = (element * 9/5) + 32;
    far.push(result);
});

console.log(far);


let holdMonth = deg.some(function (element) {
    return element < 0;
});

if(holdMonth){
    console.log("В данном году были холодные месяца")
}else {
    console.log("Холодных месяцев не было")
}

let hotMonth = deg.every(function (element) {
   return element > 0;
});

if(hotMonth){
    console.log("Все месяца Теплые");
}else {
    console.log("В этом году были и холодные месяца");
}

// let userName = prompt('Введите ваше имя '),
//     country = prompt("Введите вашу страну"),
//     city = prompt("Введите ваш город"),
//     street = prompt("Введите вашу улицу");
//
// const adress = {
//   userName: "Ваше имя:"  + userName,
//    country: "Ваша страна: " + country,
//       city: "Ваш город:"  + city,
//     street: "Ваша улица:"   + street
// };
//
// for(let key in adress){
//     alert(adress[key]);
// }

function inplaceReverse(arr) {
    var i = 0;
    while (i < arr.length - 1) {
        arr.splice(i, 0, arr.pop());
        i++;
    }
    return arr;
}


console.log(inplaceReverse(planets));

const resultDeg = deg.reduce(function (a,b) {
    return a+b;
});

let middleDeg = +(resultDeg/deg.length).toFixed(2);

console.log(middleDeg);

"use strict";

const div = document.getElementById("code-window");
div.style.position = "relative";

const AMOUNT = 10, ROWS = 4, COLUMNS = 3, ELEM_WIDTH = 30, ELEM_HEIGHT = 30, SPACE = 10;

const numbers = fillArray(AMOUNT);
createElements(numbers);

/**
 * Creates group of elements with number content
 * The result DOM should has this structure
 *
 * 0 1 4
 * 9 6 8
 * 2 5 3
 *   7
 *
 * OR
 *
 * 9 2 4
 * 0 6 8
 * 7 3 5
 *   1
 *
 * @param {Array} numbers - array with numbers
 * @return {void}
 */

function createElements(numbers) {

    for (let j = 0; j < ROWS; j++) {
        for (let k = 0; k < COLUMNS; k++) {
            const elem = createElem(numbers[j*3+k]);
            elem.style.top = ELEM_WIDTH * j + SPACE * j + "px";
            elem.style.left = j < ROWS - 1 ?
                ELEM_HEIGHT * k + SPACE * k + SPACE + "px" :
                2 * SPACE + ELEM_HEIGHT + "px";
            div.appendChild(elem);
        }
    }
}

/**
 * Creates one element with number
 *
 * @param {Number} number - value in numbers array
 * @return {Object} created element
 */
function createElem(number) {

    const elemStyles = {
        width: ELEM_WIDTH + "px",
        height: ELEM_HEIGHT + "px",
        position: "absolute",
        textAlign: "center"
    };

    const elem = document.createElement("DIV");

    for (let style in elemStyles) {
        elem.style[style] = elemStyles[style];
    }

    const text = document.createElement("P");
    text.textContent = number;
    elem.appendChild(text);

    return elem;
}

/**
 * Creates an array with numbers and mixes it
 *
 * @param {Number} length - size of the array
 * @return {Array} - array with numbers
 */
function fillArray(length) {
    const arr = [];
    for (let i = 0; i < length; i++) {
        arr[i] = i;
    }

    mix(arr);

    /**
     * Mixes elements in the array
     *
     * @param {Array} arr - array with numbers
     */
    function mix(arr) {
        for (let i = 0; i < arr.length; i++) {
            const tmp = arr[i];
            const index = Math.floor(Math.random() * arr.length);
            arr[i] = arr[index];
            arr[index] = tmp;
        }
    }

    return arr;
}