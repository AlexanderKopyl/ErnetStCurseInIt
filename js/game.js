// var Game = (function () {
//         var count = 0,
//             mygame = null;
//
//         function createGame() {
//             mygame = 'GAME';
//             count++;
//             return mygame
//         }
//
//         return{
//
//             getCounter: function () {
//                 return count;
//             },
//
//             getGame: function () {
//                 return mygame || createGame();
//             }
//         }
// })();
//
//
// console.log(Game.getCounter());
// console.log(Game.getGame());
// console.log(Game.getGame());


let gameInstance = null;

class Game {

    constructor(){

        if(!gameInstance){
            gameInstance = this;
        }

        this.counter = 0;

        return gameInstance;
    }

    getCounter(){
        return this.counter++;
    }
}

const g1 = new Game();
const g2 = new Game();


console.log(g1.getCounter());
console.log(g2.getCounter());
console.log(g1.getCounter());