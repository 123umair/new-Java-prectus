// Function
// A function definition is a piece of code that we can call multiple times is called function


//function declaration: A function declaration is a statement of existance of function, specifying its name, return type and parameters. It's like a function's signature or prototype. A  function declaration doesn't include the function's implementation(code.) Example: function add(num1,num2) syntax of function declaration..


//function definition: A function definition is the actual implementation of a function, including its code. It's Where you write the statements that the function will execute. like: 

/*
function add(num1,num2) //function declaration 
{
 return num1+num2 function definition 
 }
 add(5,5)

 */

//Basic Function
/*
function myname(){   //Function definition
console.log("u");
console.log("M"); 
console.log("A");    //Function Scope 
console.log("I");
console.log("R");
}

myname //reference function that at this location function are availabe
myname() //Now you call the function and it will give the output
*/

//Another function with parameters

/* function addtwonumbers(number1,number2) //Now this number1 and number2 is cal led the parameters
{
    console.log(number1 + number2);

}
addtwonumbers(7,8) //now here this is called the arguments where you called the function with values
*/


// Now we use the return type and see how its work in addtwonumber() function

/*
function addtwonumbers(number1,number2) //Now this number1 and number2 is called the parameters
{  
    let result = number1 + number2;
    return result     

     Ab yaha par function definition ke ak rule hota hy k  ek bar return kr dya is k bad function koi kam nhi karega  jesa k 
    esa k console.log(number1 + number2); 

    console.log(number1 + number2);

}
const result = addtwonumbers(5,5)
console.log("result:" , result);
*/


//Another method of parameters to return the values 
/*
function addtwonumbers(number1,number2) //Now this number1 and number2 is cal led the parameters
{  
    return number1 + number2 ;
}
const result = addtwonumbers(5,5)
console.log("result:" , result);
*/

//Another Example of function

function LoginUser(usermsg)
{
    return `${usermsg}  is loged in`
}

let mesg = LoginUser("Umair") // function call asign to the another variable named 'mesg'
console.log(mesg); // output will be Umair is lged in.
console.log(LoginUser("Saqib")) //Direct call with arguments output will be. Saqib is loged in 

//try this 
// let mesg = LoginUser() // undefined is loged in 
// console.log(mesg);


//ager ap argument may mesg nhi pass kar rahy or parameter or default value hi  day rahy hy tho is function bannana hoga

function yourname (stdname = 'ABC')
{
    return `${stdname} is your fake name`
}
let print = yourname()
console.log(print) 
//ya isi function ko console log kro
console.log(yourname())

//Now we use if statment to check the parameter values ok now 
function check(work="Webdeveloper")
{ 
    if(work === undefined){
        console.log('Please enter your job or work  ');
        return
    }
return `My work in company ${work}`
}
// console.log(check())
//if u override the value then give the arguments 
console.log(check('Frontenddeveloper'))



//When you we to pass multiple arugments values on a single parameter then we will use rest operator

function calulateprice(...values)
{
    return values;
}
console.log("Multiple values in a single paramter named  values:",calulateprice(100,500,800))


//we can also access objects in a functions like 
let funobj = {
    name : "Umair",
    rollno : 24,
    age : 40
}

function handleobject(anyobject)
{
    return `our use name is ${anyobject.name} and its age is ${anyobject.age}`
}

console.log(handleobject(funobj))
console.log(handleobject({
    name : "umair",
    age : 40
}));


// We also use this method in arrays

let funarray = [400,200,300]
function testarray(getArray)
{
return getArray
}
console.log(testarray(funarray[1]))

// 
