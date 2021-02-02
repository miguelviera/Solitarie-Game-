
let maximum = parseInt(prompt("Enter your max number:"));
while (!maximum) {
    maximum = parseInt(prompt("Enter a valid number!"));
}
const targetNum = Math.floor(Math.random() * maximum) + 1;
console.log(targetNum);
 
let guess = prompt("enter your first guess");
let attemps = 1;

while (parseInt(guess) !== targetNum) {
    attemps++;
    if(guess === "q") break;
      
    
    if(guess > targetNum){
        guess = prompt("To high. Try again!")
    }else{
        guess = prompt("To low. Try it again!")
    }
}
if( guess === 'q'){
    console.log("You quit!");
}else{
console.log("you won!!!")
console.log(`You made it in ${attemps} attemps`);
}

let inst;
function repeat(greeting, num) {
    inst = "";
    for(let i = 0; i < num; i++){
    inst = greeting.concat(inst);
    }
    console.log(inst) 
    return inst;
}
repeat("Hi", 3)

     
