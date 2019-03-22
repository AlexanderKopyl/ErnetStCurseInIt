function double(number) {
    console.log(number*2);
}
double(2);

// function bye() {
//     let name = prompt('Введи ваще имя');
//     alert("Досвидания: " + name);
// }
// bye();

function calc(a,b,method) {
    return method(a,b)
}

function add(x,y) {
    return x +y;
}

function subtract(x,y) {
    return x - y;
}
function multiply(x,y) {
    return x * y;
}
function devide(x,y) {
    return x / y;
}
function modulo(x,y) {
    return x % y;
}
function power(x,y) {

    let result = x;

    for (let i = 0; i < y; i++){
        result *=x;
    }

    return result;
}

console.log("power",calc(2,2,power));
console.log("add",calc(3,2,add));
console.log("subtract",calc(2,2,subtract));
console.log("devide",calc(6,2,devide));
console.log("modulo",calc(2,2,modulo));
console.log("multiply",calc(2,2,multiply));

/**
 *
 * @param money - money in the account(деньги на счету)
 * @param percent - interest rate(размер процента)
 * @param TermBankDeposit - term of bank deposit in years(срок банковского вклада в годах)
 * @returns {result} - the final amount in the account, taking into account that at the end of the year interest accrues
 */

const compinterest = (function (money,percent,TermBankDeposit) {


    let result = money,
        peramount = (money / 100) * percent,
        yearNow = 1;


    return {
        year:function () {
            if(yearNow > TermBankDeposit){
                console.log('Cрок вклада подошел к концу.. Сумма вашего вклада',result);
                return result;
            }
            yearNow++;
            result += peramount;
        },
        get:function (){
            console.log(result);
        }
    };
})(1240,20,2);

compinterest.get();
compinterest.year();
compinterest.get();
compinterest.year();
compinterest.get();
compinterest.year();


//"use strict";

console.clear();
const CELL_SIZE = 80;
const CELL_STYLES = {
    width : CELL_SIZE + "px",
    height : CELL_SIZE + "px",
    position : "absolute",
    textAlign : "center",
    fontSize : "50px"
};

const SIZE = 3;
let positions = [],
    cells = [],
    counter = 0,
    playerWin = false,
    computerWin = false;

createField(SIZE);
function createField(size) {
    let fieldContainer = document.getElementById("field");
    fieldContainer.style.position = "relative";
    let counter = 0;
    for (let i = 0; i < size; i++) {
        positions[i] = [];
        for (let j = 0; j < size; j++){
            positions[i][j] = -1;
            counter++;
            cells.push(cell(fieldContainer, i, j, counter));
        }
    }
    return cells;
}

function cell(parent, i, j, counter) {
    let top = i;
    let left = j;
    let cell = document.createElement("BUTTON");
    setStyle(cell, CELL_STYLES);
    cell.style.top = top * CELL_SIZE + "px";
    cell.style.left = left * CELL_SIZE + "px";
    cell.textContent = "";
    cell.addEventListener("click", function(event) {

        positions[i]['weight'] = true;

        if(cell.textContent === "X" || cell.textContent === "O" || playerWin || computerWin){
            return;
        }
        listener(event, i, j, cell);
    });
    parent.appendChild(cell);
    return cell;
}

function setStyle(obj, styles){
    for(let style in styles){
        obj.style[style] = styles[style];
    }
}

function listener(event, i, j, cell) {
    cell.textContent = "X";
    positions[i][j] = 1;
    let win = checkField(1);
    win ? console.log("player WIN", playerWin = true) : computerStep() ? console.log("computer WIN",computerWin = true) : console.log("next run");
}

function computerStep() {
    let pos = checkFree();
    if(pos) {
        cells[pos[0] * SIZE + pos[1]].textContent = "O";
    } else {
        console.log("DRAW");
        return;
    }
    positions[pos[0]][pos[1]] = 0;
    let win = checkField(0);
    return win;
}

function checkFree() {
    let freeCells = [];
    positions.forEach(function(row, i) {
        row.forEach(function(val, j) {
            if(positions[i][j] === -1){
                freeCells.push([i, j]);
            }
        });
    });
    let freeCell = freeCells[Math.floor(Math.random() * freeCells.length)];
    return freeCell;
}
function hasX(element) {
    return element > 0;
}
function checkField(value) {
    let win = false;
    let horizont = 0, vertical = 0, diagonalOne = 0, diagonalTwo = 0;
    for (let i = 0; i < SIZE; i++) {
        for (let j = 0; j < SIZE; j++) {
            if(positions[i][j] == value) {
                horizont++;
            }
            for(let l = 0; l < SIZE; l++){
                if(positions[l][j] == value) {
                    vertical++;
                }
            }
            if(i === j && positions[i][j] === value) {
                diagonalOne++;
            }
            if(i === (SIZE - j - 1) && positions[i][j] === value) {
                diagonalTwo++;
            }
            if(horizont === SIZE || vertical === SIZE || diagonalOne === SIZE || diagonalTwo === SIZE) {
                win = true;
            }
            vertical = 0;
        }
        horizont = 0;
    }
    return win;
}

function checkWin() {
    let win = false;
    return win;
}