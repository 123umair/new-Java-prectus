//Scope 
//Block Scope and Global Scope inside the paranthesis is called block scope outside the paranthesis called Global scope

//Example 
// const a = 10
// let b = 20
// var c = 30
// console.log(a);
// console.log(b);
// console.log(c);

//var c = 300 // It give value same c variable give 30 
const a = 20 //Now this a value is totally independant from block scope 
if (true){
const a = 10
let b = 20
var c = 30
//console.log("inside the block scope value of a is :",a);
}
//console.log("value of a in Global scope is : ",a);
//console.log(c);
// console.log(a); a is not defined because we declared it in block scope and we are not return it and in block scope values accessed inside the block scop not outside and same as for b
// console.log(b);
//console.log(c); But var c is gives the values which create a problem and user will be confused.

//now clean code is 
const age = 40
if(true){ 
    const age = 60  //{ block scope if,loop,function }
   // console.log(`The value of age of the man (block scope) is ${age}`);
}

//console.log(`The value of age of the man (Global scope) is ${age}`);

let name = 'umair'
if (true){
    let name = 'uk'
    //console.log(`name of student is ${name} in block scope`);

}
//console.log(`name of student is ${name} in global scope`);



//Now see the var keywords how its create a problem 

var ont = 40
if (true){
    var count = 4
console.log(`value of var in block scope is ${count}`);
}
// console.log(`value of var in global scope is ${ont}`); 
//now this create a problem therefore we use let and const variable 




//Now scope in functions (nested functions) Nested functions
//We also called that closure
function one(){
    const name = "Umair"
    console.log(name);
    function two(){
        const website = "uk"
        console.log(name + website);
        //In nested function we access the parent function variable in its child funciton named two().but not access the child variable in its parent function
    }
    
    //console.log(website); scope error
    two()

}
one()

//Same as in if statement like that

if (true){
   const username = 'Umairkhan'
    if(username ==='Umairkhan')
    {
        const yourname = "XYZ"
        console.log(username + yourname);
    }
// console.log(yourname); //Scope error
}
// console.log(username);//Scope error

//Here some more about function +++++++++++ Interesting concept +++++++++++
/*
function price(value)
{
    return value + 1
}
console.log(price(9))
const two = function(num)
   {
    return num + 1
   }
console.log(two(5))
*/

//now write the function first from the function initialization
console.log(price(9))

function price(value)
{
    return value + 1
}


// console.log(two(5))
// const two = function(num)
//    {                   //now this is not accessing the value before initialization
//     return num + 1    //this is also called expression
//    }
