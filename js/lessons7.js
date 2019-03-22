// const button = document.querySelector('button'),
//       p = document.querySelector('p'),
//       input = document.querySelector('input');
//
//
// button.addEventListener('click',function () {
//     p.style.fontSize = "50px";
// });
//
// button.addEventListener('mouseover',function () {
//     button.textContent = "Наведён курсор";
//
// });
//
// button.addEventListener('mouseout',function () {
//     button.textContent = "Button";
// });
//
// input.addEventListener('blur',function () {
//     if(input.value.indexOf('@') === -1){
//         alert('Не коректно введена почта');
//     }
//     input.style.backgroundColor = "#FF8A80";
// });
//
// input.addEventListener('focus',function () {
//
//     input.style.backgroundColor = "#69F0AE";
// });

// const button = document.querySelector('button');
//
// function handler (){
//     let name = prompt('Введите имя'),
//         p = document.createElement('p');
//     p.textContent = name;
//     if(name.toLowerCase() === 'stop' || name.toLowerCase() === 'escape'){
//         button.removeEventListener('click',handler);
//         return;
//     }
//     // document.body.appendChild(p);
//     document.body.prepend(p);
// }
// button.addEventListener('click',handler);

let isChanged = false;
let r = 255, g = 255, b = 255;
const body = document.body;

const tooggleStyleBody = {
    width: "45px",
    height: "20px",
    backgroundColor: "rgb(200, 200, 200)",
    borderRadius: "10px"
};

const toggleStyleSlider = {
    width : "16px",
    height : "16px",
    position : "relative",
    top : "2px",
    left : "2px",
    backgroundColor : "rgb(230, 230, 230)",
    borderRadius : "8px"
};

const styleButton = {
  width: "100px",
  borderWidth: "1px",
  borderColor: "#000",
  borderStyle: "solid",
  marginRight: "15px",
  marginTop: "15px",
  height: "40px",
  textAlign: "center"
};

body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";

const toggleBody = document.createElement("DIV");
const toggleSlider = document.createElement("DIV");
const inputG = document.createElement("INPUT");
const inputR = document.createElement("INPUT");
const inputB = document.createElement("INPUT");

inputG.setAttribute('placeholder','Set green color');
inputR.setAttribute('placeholder','Set red color');
inputB.setAttribute('placeholder','Set brown color');
inputB.setAttribute('maxlength','3');
inputR.setAttribute('maxlength','3');
inputG.setAttribute('maxlength','3');

for(let key in tooggleStyleBody){
    toggleBody.style[key] = tooggleStyleBody[key];
}
for(let key in toggleStyleSlider){
    toggleSlider.style[key] = toggleStyleSlider[key];
}

for(let key in styleButton){
    inputG.style[key] = styleButton[key];
    inputR.style[key] = styleButton[key];
    inputB.style[key] = styleButton[key];
}

function toggle(){
    if (isChanged){
        isChanged = false;
        body.style.backgroundColor = "white";
        const interval = setInterval(function(){
            if (parseFloat(toggleSlider.style.left) < 0){
                r = 255, g = 255, b = 255;
                body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                toggleSlider.style.left = "2px";
                clearInterval(interval);
            } else {
                r += 5, g += 5, b += 5;
                body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                toggleSlider.style.left = parseFloat(toggleSlider.style.left) - 1 + "px";
            }
        },10);
    } else {
        isChanged = true;
        body.style.backgroundColor = "grey";
        const interval = setInterval(function(){
            if (parseFloat(toggleSlider.style.left) > 29){
                r = inputR.value, g = inputG.value, b = inputB.value;
                body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                toggleSlider.style.left = "27px";
                clearInterval(interval);
            } else {
                r -= 5, g -= 5, b -= 5;
                body.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")";
                toggleSlider.style.left = parseFloat(toggleSlider.style.left) + 1 + "px";
            }
        },10);
    }
}

toggleBody.addEventListener("click", toggle);
toggleBody.appendChild(toggleSlider);
body.appendChild(toggleBody);
body.appendChild(inputB);
body.appendChild(inputG);
body.appendChild(inputR);


