

// factory(lineSize, colors);

// function createBlock(type, styles) {
//     const block = document.createElement(type);
//
//     for (const key in styles) {
//         block.style[key] = styles[key];
//     }
//
//     return block;
// }

// function factory(size, colors) {
//     for (let i = 0; i < size; i++) {
//         const block = createBlock('div', blockStyles);
//         //block.style.top = `${H * i}px`;
//         block.style.left = `${W * i}px`;
//         block.style.backgroundColor = `rgb(
//             ${(Math.abs(colors.red.from - colors.red.to) / (size - 1)) * (i + 1)},
//             ${(Math.abs(colors.green.from - colors.green.to) / (size - 1)) * (i + 1)},
//             ${(Math.abs(colors.blue.from - colors.blue.to) / (size - 1)) * (i + 1)}
//         )`;
//
//         document.body.appendChild(block);
//     }
// }

class Game {

    constructor(size,colors,blockStyles){

        this._blockStyles = blockStyles;
        this.counter = 0;
        this._factory(size, colors);

        if(!gameInstance){
            gameInstance = this;
            console.log("if",gameInstance);
        }
            
            return gameInstance;
    }

    _factory(size, colors) {

        for (let i = 0; i < size; i++) {
            const block = this._createBlock('div', this._blockStyles);
            //block.style.top = `${H * i}px`;
            block.style.left = `${W * i}px`;
            block.style.backgroundColor = `rgb(
            ${(Math.abs(colors.red.from - colors.red.to) / (size - 1)) * (i + 1)}, 
            ${(Math.abs(colors.green.from - colors.green.to) / (size - 1)) * (i + 1)}, 
            ${(Math.abs(colors.blue.from - colors.blue.to) / (size - 1)) * (i + 1)}
        )`;

            document.body.appendChild(block);
        }
        this.counter++;
    }

    _createBlock(type, styles) {
        const block = document.createElement(type);

        for (const key in styles) {
            block.style[key] = styles[key];
        }

        return block;
    }
}
let gameInstance = null;
const W = 60;
const H = 100;

const blockStyles = {
    width: `${W}px`,
    height: `${H}px`,
    position: 'absolute'
};

const colors = {
    red: {
        from: 255,
        to: 0
    },
    green: {
        from: 100,
        to: 200
    },
    blue: {
        from: 200,
        to: 0
    }
};

const lineSize = 6;
const myGame = new Game(lineSize, colors,blockStyles);
const myGames = new Game(lineSize, colors,blockStyles);

console.log(myGame.counter);
console.log(myGames.counter);



