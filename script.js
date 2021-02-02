
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


// let arr = [];
// let newItem;
// let deleteItem;
// let whatToDo;
// while (true) {
//     whatToDo = prompt("What would you like to do ?");
//     if (whatToDo === "new") {
//         newItem = prompt("Enter a new Todo");
//         arr.push(newItem)
//         console.log(`${newItem} added to list`)
//     }
    
//     if (whatToDo === "delete") {
//         deleteItem = prompt("What item you want to delete?") - 1;
//         if(Number.isInteger(parseInt(deleteItem)) === true) {
//         arr.splice(deleteItem, 1);
//         console.log(`${deleteItem + 1} item deleted`);
//     }
//     }   
//     else if (whatToDo === "list") {
//         console.log("**********")
//         for (let i = 0; i < arr.length; i++) {
//             console.log(`${i+1}: ${arr[i]}`)  
//         }
//         console.log("**********")
//     }
//     else if(whatToDo === "quit"){
//         console.log("OK YOU QUIT THE APP!"); break;
//     }
// }

     
