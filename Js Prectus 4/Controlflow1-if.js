// If else Statement

// if (condition) {
//       Basic Syntax
// }

// Comparisons operators

// == for equality , === (also check its datat types) , <> (greater and less) ,>=,<=,!= ,

// &&  both conditions wants true then its will be executed in block scope statement
// || Or operator In this operator it wants only one true in both conditions then block scope statement will be executed



//Now check first if we wants to enter in the if statement scope then we kept the condition of if will be true liek 
if (true) {
    console.log('Hey im executed');
}

// Now we give some true conditions 

let UserLogedIn = true
if(UserLogedIn){
    console.log('Yes is loged in ');
}

// Or We use ture condition with anothe logics in Numbers

if (2!=3) {
    console.log('Yes its true that two  is not equal to 3');
    
}

// Lets give false condition to check 

if (2>3)
{
    console.log('We are not executed');
    // This console is not executed because we give the false condition 
}

// ===
if (2 == '2') {
    console.log('Here equality operator will equal both and said its true');

    /* 
    
    The reason why 2 == '2' evaluates to true is because of a concept in JavaScript called 'type coercion' or 'loose equality'

    Type coercion, also known as loose equality, is a process in JavaScript where the browser implicitly converts one data type to another to make a comparison or operation possible.

    this means that:
    . Strings are converted to numbers when compared to numbers
    .Booleans are converted to numbers (true ---> 1, false ---> 0)
    .Objects are converted to their primitive values (e.g., [1] == 1
    because [1] is converted to 1)
    
    
    In java Script when you compared two different data types with using '==' operator, The browser will attempt to convert  one or both values to a common type to make the comparison

    In this case, the string '2' is converted to a number, resulting in 2, which is then compared to the original number 2. Since they are now the same value and type, the comparisong returns true */
}

// Now by ===
if (2 === '2') {
    console.log('I will not execute');
}

if (0 == false){
    console.log('Yes your correct');
}


let Score = 100
if (Score>50) {
    const great = 'Strong betsman'
    console.log(`Your the ${great} of Pak Team`);
}


// $$$$$$$$$$$$$$ Short Hand $$$$$$$$$

const balance = 1000
if (balance > 500) console.log('test'); // This is called implicite Scope 

//  If you use multiple console.logs in this implicite scope then u use commas before from the last log like
const pass = 50

if(pass >30) console.log('Try again'),console.log('give test again and try to pass it') //But ths is not a good prectus ok so don't use this ok



// let temperature = 500
// if (temperature>500) {
//     console.log('Temp is 500');
// } else{
//     console.log('no tmp is equal to 500 not greater then 500');
// }


//      Now else if so we execute two statements at a time in a blockscope

let passing_marks = 50
let fahad_score = 5
if (fahad_score >= passing_marks) {
    const name = 'fahad'
console.log(`Congratulations! ${name} you passed the exam with ${fahad_score}`);    
} else {
    console.log(`Try again you failed the taste you can't make the ${passing_marks} `);
}


// We used the Logical  operators

let username = true
let id = false

if (username && id) {
    console.log('Welcome to our website');
} else {
    console.log('login failed try again');
}

// Temperture exmaple with nseted if else
let temp = 50

if (temp >= 50) {
    console.log(`Don't go outside from the home`);
}
else if(temp < 45)
{
    console.log(`Now the weather is fine for work for some hour `);
}
else if(temp < 35)
{
    console.log(`Now weather is full fine and now you will able to do more work`);
}
else {
    console.log(`Enter the valied temp bro`);
}


// Create a program where user login through email and also its debit card to buy course
let userlogin = true
let debitcard = true
 
// for both true condition we use && Operator
if (debitcard && userlogin) {
    console.log(`You buy this course`);
} else {
    console.log(`Your not able to buy the course`);
}


// Anothr user named ej was login in education website through email or google acount
let google = true
let email  = true
if(google || email )
{
   console.log('youe loged in ');
}
else{
    console.log('your not loged in ');
}