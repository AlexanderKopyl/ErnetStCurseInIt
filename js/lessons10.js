var s = "Recursion is sometimes used humorously in computer science, programming, philosophy, or " +
    "mathematics textbooks, generally by giving a circular definition or self-reference, " +
    "in which the putative recursive step does not get closer to a base case, " +
    "but instead leads to an infinite regress. It is not unusual for such books to include a joke entry in their " +
    "glossary along the lines of:Recursion, see Recursion.[6]A variation is found on page 269 in the index of some " +
    "editions of Brian Kernighan and Dennis Ritchies book The C Programming Language; the index entry recursively " +
    "references itself (recursion 86, 139, 141, 182, 202, 269). The earliest version of this joke was in Software " +
    "Tools by Kernighan and Plauger, and also appears in The UNIX Programming Environment by Kernighan and Pike. " +
    "It did not appear in the first edition of The C Programming Language.";

var str = "Как  подсчитать колличество подсчитать  " +
    "одинаковых подсчитать колличество одинаковых " +
    "слов снова подсчитать колличество одинаковых слов подсчитать колличество слов" ;

var patternS = /\bthe\b/gi,
    patternAll = /the/gi,
    patternNumber = /\d{1,}/g,
    patternNotNumber = /\D/,
    patternInOn = /[io]n/g;


console.log(s.match(patternS));
console.log(s.match(patternAll));
console.log(s.match(patternNumber));
console.log(s.match(patternNotNumber));
console.log(s.match(patternInOn));

var inp = document.querySelector('input'),
    arrInp = [];

// inp.addEventListener('change',function () {
//     var patternName = /[А-ЯЁа-яё]/;
//
//     if(arrInp.indexOf(inp.value) === -1){
//
//         if (patternName.test(inp.value)){
//             arrInp.push(inp.value);
//             console.log("Имя добавленно");
//             inp.textContent = "";
//         }else {
//             console.log('Данное имя введено не верно.. формат ввода ',"А-ЯЁа-яё" )
//             inp.textContent = "";
//         }
//
//     }else{
//         console.log('Данное имя существует')
//     }
//
//
// });

var p = document.querySelector('p');

var matches = p.textContent.match(/\d{1,}/g);

matches.forEach(function (elem) {
    p.innerHTML = p.innerHTML.replace(elem,'<b>'+ elem +"</b>");
});
class Periodicity {

    info(str){
        console.clear();
        const patternCountWord = /[A-Za-zА-ЯЁа-яё]+/g,
              arrayWord = str.match(patternCountWord),
              countWord = str.match(patternCountWord).length,
              countSameWord = {};

        arrayWord.forEach(function (elem) {

            if(countSameWord[elem] >= 1 ){
                countSameWord[elem]++
            } else{
                countSameWord[elem] = 1;
            }

        });
        for(let key in countSameWord) {
            countSameWord[key + 'Procent'] = +(countSameWord[key] * 100 / countWord).toFixed(2);
        }


        console.log(str);
        console.log(countSameWord);
        console.log(countWord);

    }
}


const myStrClass = new Periodicity();
myStrClass.info(str);