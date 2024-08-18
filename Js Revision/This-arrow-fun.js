//This key word give the current context means the current variables and its values in objects basically used in objects.

// Example

let obj = {
    name : 'Umair ',
    Semester : '6th',
    Department : 'Software Engineering',
    Regno : '21Fse002',
    Thiscon : console.log(this),
    about : function()
{        console.log(`This object is to show the current context about this object by this key world`);
     console.log(this);
}       
}
obj.about() // give full current context of the object



/* 
let obj = {
    name : 'Umair ',
    Semester : '6th',
    Department : 'Software Engineering',
    Regno : '21Fse002',
    Thiscon : console.log(this),
    about : function()
{        console.log(`This object is to show the current context about this object by this key world`);
    
}      
}

console.log(obj['thiscon']);// this out put will give undefined because 
When you assign this directly to a property of an object outside of any method, it captures the context in which the object is being defined. In the global scope, this refers to the global object (window in browsers or global in Node.js), and console.log(this) returns undefined because console.log does not return any value.


 */


// Create a one object insdie this object create one another method and inside method create another object and use this keyword and check what is the output of this

let one = {
    name : 'uk',
    id : 3,
    depart : "software",
    inside : function (){
        let innerobj = {
            yourname:' Inner object',
            detail: 'to use this keyword and check what its give the output ' ,
            forthis : console.log(this),
        }

    }
      
}
one.inside()  // Give the current context of the one object.


// Another exmaple of the object 

let company = {
    name: 'Netsole',
    salleries : '100000',
    hired : 'software engineer'
}

//outside function
 function handleobj(tobj){       
    console.log(`${tobj.name}`);
 }
 handleobj(company)


 // with keys in parameters
//  let user = {
//     name : 'a',
//     address : 'ghani baist khel bannu',
     
//  }


//function call  with objects parameter 

 function handleuser(properties){
   console.log(`your values is ${properties.name} ${properties.address}`);
 }
 handleuser({name : 'b',
    address : 'ghani baist khel bannu',
 })

//  function add (){
//     console.log(this); //give more values etc at function scope
//  }
//  add()






 // Expression  function

//  const add = function (num1,num2){
//      let sum = num1 + num2
//      console.log(sum);            output = 10
//  }
// add(5,5)
 
// let add = function (num1,num2){
//     let add = num1 + num2
//     console.log(add);          output = 10
// }
// add(5,5)



// now arrow function


const add = () =>{}   //arrow func

const arrow = (num1 ,num2) =>{
   if (num1 != Number && num2 !=Number)
   {
    console.log('Only numbers datatype are valid not another data type try again');
    return
   }
   console.log(num1 + num2);
}
arrow(String(2),String(3))
arrow(2.5,3.4)


//Explicit return type arrow functioin

const explicit = (value1,value2) =>{
      return value1 - value2
}
console.log(explicit (5,5));



// Implicit arrow functioin

const implicit = (value1,value2)=> value1 - value2
console.log(explicit (10,5));
 //or use this method that are used mostly in react

const copy = (value1,value2)=> (value1 - value2)
console.log(explicit (10,5));