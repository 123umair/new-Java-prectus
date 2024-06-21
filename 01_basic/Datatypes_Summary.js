/*Data Types Based on Memory Storage and Access
Data types in programming languages can be categorized based on how they are stored in memory and how they are accessed from memory. These categories are:

1. Primitive Data Types (Call by Value)
Primitive data types are the most basic data types available in a programming language. They are called "primitive" because they are not composed of other data types. When a primitive type variable is assigned to another variable, a copy of the value is made. This is known as "call by value."

Characteristics:
Stored directly in memory: The actual value is stored in the memory location associated with the variable.
Independent copies: Each variable holds its own copy of the data.
Examples: int, float, double, char, boolean
Example:
java
Copy code
int a = 5;
int b = a; // b gets a copy of the value of a
b = 10;   // Changing b does not affect a


2. Non-Primitive Data Types (Reference Type)
Non-primitive data types, also known as reference types, are more complex. They can be composed of primitive data types and other non-primitive types. When a non-primitive type variable is assigned to another variable, the memory address (reference) of the data is copied, not the data itself. This is known as "call by reference."

Characteristics:
Stored as references in memory: The memory location (reference) of the actual data is stored in the variable.
Shared references: Multiple variables can refer to the same data.
Examples: Arrays, Classes, Interfaces, Strings (in some languages)
Example:
java
Copy code
int[] arr1 = {1, 2, 3}; //// arr1 holds the memory address where the array {1, 2, 3} is stored
int[] arr2 = arr1; // arr2 gets the reference to the same array as arr1
 or 
                    // arr2 gets the same memory address as arr1

arr2[0] = 10;     // Changing arr2 affects arr1 as well
This categorization highlights the fundamental difference in how primitive and non-primitive data types are handled in memory, which is crucial for understanding variable assignments, parameter passing, and data manipulation in programming.

################################    Effects ############################
Effects:
Shared Data: Both arr1 and arr2 see the change because they refer to the same data.
Memory Efficiency: No new array is created; only the reference is shared.
Potential Side Effects: Changes through one reference will inadvertently affect the other, which might be unintended in some cases.


*************************************** Primitive datatype ************************************************
Primitive Data type are:

Number , String , BigInt , Symbol , NULL , Undefined , Boolean */

// const largeno=1234567897864542323n
// console.log(largeno)
// console.log(typeof largeno)


//Symbol :
// const myid = Symbol ("umair")
// console.log(typeof myid)
//const mynewid = Symbol ("umair")
// console.log(myid === mynewid)



//Non-Premitive Datatype or call by reference or reference type are:
// //array
// let myarr=['umair','html','css','javascript']
// console.log(myarr)
// const umair=[1,3,4,,,7,6,5]
// console.log(umair) // Here there output overall the array is [ 1, 3, 4, <2 empty items>, 7, 6, 5 ]
// console.log(umair[2])
// console.log(umair[3]) //on index 3 its output will be undefined

//OBjECT
//we can write an object in parenthesis also it will be more then on object inside the object and also used commas with every vairable 
let Myskills={
    Name : 'Umair' ,
    Age  : 18, 
    Ourskills : ['html', 'css', 'Java_script'] // This is array but we not used here '=' because its inside this array inside the object

    /* READ THIS  =   inside the object we use colon instead of '=' it doesnot matter that it will be array or any other datatype.
    
    ANSWER: Yes, in JavaScript objects, whether you are assigning an array or any other data type to a property, you always use a colon (:) to separate the property name (key) from its value. The equal sign (=) is not used inside an object definition because it is reserved for variable assignment or for setting object properties outside of the initial object declaration. */
                  
}
console.log(Myskills)
console.log(typeof Myskills)

//##  Function  ##
//Generally we now create a variable type function
const MyFunction = function()
{
    let world="Hello world"
    console.log(world)
}
MyFunction()
console.log(typeof MyFunction)
