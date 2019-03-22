// const btn = document.getElementsByTagName("button").item(0);
// const exp = 2;
// let number = 10;
//
// btn.addEventListener("click", function(){
//     try {
//         number = Math.pow(number, exp);
//         new Array(number);
//         console.log(number);
//     }catch (e) {
//         console.log('Ошибка отловленна: ' + e.message)
//     }finally {
//         console.log('Финальная часть try/catch/finally');
//     }
//
// });
// const inp = document.getElementsByTagName("input").item(0);
// inp.addEventListener("change", function(){
//     setTimeout(function (val) {
//         alert(val);
//     },5000,inp.value);
// });

// inp.addEventListener("change", function(){
//
//     let smallText = setTimeout(function(){
//         console.log("слишком мало букв");
//     }, 5000);
//
//     if (inp.value.length >= 10){
//         console.log('молодец');
//         clearInterval(smallText);
//     }
// });
// const btn = document.getElementsByTagName("button").item(0);
// let counter = 0;
//
// btn.addEventListener("click", function(){
//
//     let counterTimer = setInterval(function(){
//         counter++;
//         if(counter >= 10){
//             clearInterval(counterTimer);
//         }
//         console.log("Прошло " + counter + " секунд");
//     }, 1000);
//
//
//
// });

const html = document.getElementsByTagName("html").item(0);
const btn = document.getElementById("btn");
const stop = document.getElementById("stop");
const div = document.getElementById("rain_container");
let stopRain = false;
const COLOR = (function() {
    return {
        red : function() {
            return Math.floor(Math.random() * 255);
        },
        green : function() {
            return Math.floor(Math.random() * 255);
        },
        blue : function() {
            return Math.floor(Math.random() * 255);
        }
    };
})();

stop.addEventListener('click',function () {
    stopRain = true;
    btn.addEventListener("click", rain);
});

btn.addEventListener("click", rain);

function getColor() {
    const white = Math.floor(Math.random() * 100 + 155);
    return "rgb(" + white + ", " + white + ", " + white + ")";
}

function makeRain() {

    if(stopRain){
        stopRain = false;
    }else{
        btn.removeEventListener("click", rain);
    }

    const styles = {
        width : "2px",
        height : "12px",
        position : "absolute",
        top : Math.floor(Math.random() * -100) + "px",
        left : Math.floor(Math.random() * 1300) + "px",
        backgroundColor : getColor(),
        display : "none"
    };

    let drop = new makeDrop();
    const interval = setInterval(function() {
        let pos = parseFloat(drop.style.top);
        if (pos > -100 && pos < 1250) {
            drop.style.display = "block";
            drop.style.top = pos + 5 + "px";
        } else if (pos <= -100 ) {
            drop.style.top = pos + 5 + "px";
        } else {
            drop.style.top = pos + "px";
            div.removeChild(drop);
            drop = null;
            clearInterval(interval);
        }
    }, 10);

    function makeDrop() {
        const drop = document.createElement("div");
        for (let prop in styles){
            drop.style[prop] = styles[prop];
        }
        div.appendChild(drop);
        return drop;
    }
}

function rain() {
      const rain = setInterval(function() {
        if(stopRain) clearInterval(rain);
        makeRain();
    }, 10);
}