// const p = document.querySelectorAll('p');
//
// console.log(p[1]);
// p[2].innerHTML = p[2].innerHTML.toLocaleUpperCase();

const four = document.querySelector('#four'),
      two = document.querySelectorAll('.two'),
      p = document.querySelectorAll('p'),
      div = document.querySelectorAll('div');

for (var i = 0; i < div[2].childNodes.length; i++) {
    if(div[2].childNodes[i].tagName) div[2].childNodes[i].style.background = 'yellow';
}

console.log(four.innerHTML);
two.forEach(function (elem) {
    elem.style.fontSize = "30px";
});

p.forEach(function (elem) {
    let attr = elem.getAttributeNames();

    for(let key = 0; key < attr.length; key++){
        if(attr[key] === 'name') elem.style.color = "red"
    }
});
