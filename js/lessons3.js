let drink = prompt("Какой напиток вы предпочтете: Кока-кола, Спрайт, Фанта"),
    three = [],
    five = [],
    fiveAndthree = [],
    isEven = false;

switch (drink) {
    case "Кока-кола":
        alert("Вы Выбрали " + drink);
        break;
    case "Cпрайт":
        alert("Вы Выбрали " + drink);
        break;
    case "Фанта" :
        alert("Вы Выбрали " + drink);
        break;
    default:
        alert("Простите данного напитка нет в меню");
        break;
}

for (let i = 0 ; i <= 100; i++){
   if(!(i % 3)){
       three.push(i);
   }

   if(!(i % 5)){
        five.push(i);
   }
   if(!(i % 3) && !(i % 5)){
       fiveAndthree.push(i);
   }
}
document.write(three.length + " Чисела деляться на 3 без остатка" + "<br>");
document.write(five.length + " Чисело деляться на 5 без остатка"+ "<br>");
document.write(fiveAndthree.length + " Чисел деляться на 3 и на 5  без остатка"+ "<br>");


while (!isEven){
    let prompts = prompt("Введите четное число");
    if ( prompts & 1 ) {
        alert( "нечетно" );
    } else {
        isEven = true;
        alert( "четно" );
    }

}

(function() {
    const sun = {
        width : "100px",
        height : "100px",
        borderRadius : "50px",
        backgroundColor : "rgb(255, 255, 0",
        position : "absolute",
        opacity : '1',
        top : "10px",
        left : "10px"
    };

    const body = document.body;
    const elem = document.createElement("div");

    for (let attr in sun) {
        elem.style[attr] = sun[attr];
    }

    body.appendChild(elem);

    let color = 255, top = 10, left = 10,
        elemWidthStep = 0.1, elemHeightStep = 0.1,
        elemOpacity = 0.001;
    const interval = setInterval(function() {
        color -= 0.1;
        top = 0.2;
        left = 0.2;
        elem.style.backgroundColor = "rgb(255," + Math.ceil(color) + ",0)";
        elem.style.top = parseFloat(elem.style.top) + top + "px";
        elem.style.left = parseFloat(elem.style.left) + left + "px";
        elem.style.width = parseFloat(elem.style.width) - elemWidthStep + "px";
        elem.style.height = parseFloat(elem.style.height) - elemHeightStep + "px";
        elem.style.opacity = parseFloat(elem.style.opacity) - elemOpacity;

        if(elem.style.top === "480px" || elem.style.left === "320px" || elem.style.width === "10px" ){
            clearInterval(interval);
        }

    }, 10);
})();