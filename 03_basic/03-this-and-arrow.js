

// This keyword will refer to the current context like

let chai = {
    name : "Whitecoffee",
    price : '99$',
    givemesg : function ()
    {
        console.log(`welcome to our famouse chai ${this.name}`)
        console.log(this);
    }
}
chai.givemesg()
chai.name = '250tea'
chai.givemesg()
// console.log(this); in node environment this will give {} object  because there no globally availabe context



// now we are run this keyword inside the function
/*function code(){
    console.log(this);  //Now it gives more values
}
code()*/

// function code(){
//     let username = 'umair'
//     console.log(this);  //same values
// }
// code()

/* 
function code(){
    let username = 'umair'
    console.log(this.username);  // Basically this work in objects context not use in functions like in objects
}
code()

*/

/*
const fun = function(){
    let username = 'umair'
    console.log(this.username); //Also give the same output = undefined
}
fun()
*/



// Arrow function

// const fun = () =>{
//     let username = 'umair'
//     console.log(this.username);  //Give undefined output
// }
// fun()




// Arrow function with parameters
/*    
const add = (num1,num2) => {
    return num1 + num2 When you use the curley braces then u will write the 'return keyword' or it is also called explicite return
}
console.log(add(3,5));
*/



// Implicite return 

/* const add = (num1,num2) => num1 + num2 
console.log(add(5,5));*/
 
//OR
/* const add = (num1,num2) => (num1 + num2) //Remember this trick used in  react also this is implicite return because not use implicite return
console.log(add(5,5));*/


// Now return an object in arrow function

const obj = ( )=>({name:"Chai"})
console.log(obj());
