const rnd = Math.floor(Math.random() * 10) + 1;
//console.log(rnd);
let number = parseInt(prompt("Guess a number from 1 to 10: "));
while (number != rnd){
    number = parseInt(prompt("Guess a number from 1 to 10: "));
}
if (number === rnd){
    console.log("Correct number!");
}