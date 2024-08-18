/* q1: You are tasked with creating a simple number guessing game in JavaScript. The game generates a random number between 1 and 4, inclusive. If the random number is 4, the game congratulates the player and ends. If the random number is not 4, the game prints "Try Again". */

GuessNo=(Math.floor(Math.random()*4)+1);
function game(correctno){
    if(correctno === 4)
    {
        console.log(`Congratulations! You find your own number`);
        return
    }
    console.log("Print Again ");

}
game(GuessNo)






// Function with objects how i access any objects

let intro = {
    name : "Muhammad Umair khan",
    father_name : "Dilabaz khan",
    contact_no : '03322769191'
}

function handobj (anyobject)
{ 
 if (anyobject.name  === "Muhammad Umair khan" && anyobject.father_name === "Dilabaz khan")
 {
    console.log("Congratulations! Your hired a Great Software Engineer");
  return 
}
console.log("Hired another engineer");
}
handobj(intro)


//Confusing function 

let Car = {
    name : Lamborgini,
    publish_year : 2024
}
function handleobject(anyobject)
{
    console.log(`This functin is about call detail and its name ${name} and its publish year is ${anyobject.publish_year}`);
}
handleobject(anyobject)


// Prompt the user for their name
let name = prompt("Please enter your name:");

// Prompt the user for their age
let age = prompt("Please enter your age:");

// Display the user's input
console.log("Hello, " + name + "!");
console.log("You are " + age + " years old.");

prompt("Enter your name")