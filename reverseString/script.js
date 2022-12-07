//zadatak 2 - odrece reci u nazad
let string = prompt("Enter a word: ");
console.log(reverseString(string));

function reverseString(string){
    let revStr = "";
    for(let i = string.length-1; i >=0; i--){
        revStr += string[i]
    }
    return revStr;
}
//zadatak 3 - spajanje dve liste i obrisemo duplikate
const cars = ["Saab", "Volvo", "BMW"];
const trucks = ["Mercedes", "Ford", "Volvo"];

const brands = (Array.from(new Set(cars.concat(trucks))));
console.log(brands);
//zadatak 4 - traziti Strings u nizu, kada ih nadje treba da ih izbaci iz niza
let numarr = [23, 56, 453, "nevena", 34, "string", "asdf"];
numarr = numarr.filter(x => typeof x !== "string");
console.log(numarr);
//zadatak 5 - sortirati niz po velicini stringa
let words = ["aaaa", "ddd", "as", "sdfdsg", "a"];
words = words.sort((a, b) => a.length - b.length);
console.log(words);

