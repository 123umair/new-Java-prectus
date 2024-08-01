/* An IIFE (Immediately Invoked Function Expression) is a JavaScript function that is executed immediately after it is defined. The syntax for an IIFE involves wrapping the function declaration in parentheses, followed by another set of parentheses to invoke the function immediately. 

Basic:

(function() {
    console.log("This is an IIFE!");
})();

Benefits: 
1)Avoids Global Scope Pollution:

Variables and functions inside an IIFE are not accessible from the global scope, thus preventing potential naming conflicts.

// Global scope
var username = "Alice";


var username = "Bob"; // This overwrites the previous username

console.log(username); // Outputs: "Bob"

 With use of iffe

 // Global scope
var username = "Alice";

(function() {
    var username = "Bob"; // Local scope within the IIFE
    console.log(username); // Outputs: "Bob"
})();

console.log(username); // Outputs: "Alice"




2) Module Pattern:

Often used in the module pattern to create private and public methods, aiding in code organization and modularization. (check in chatgpt)

3) Immediate Execution:

Executes immediately after its creation, which is useful for tasks that need to run once, like initialization code. (check in chatgpt)
*/


// Now  we are create a basic iife
(function basic(){   // Also called named iife
    console.log('This is basic iife');
})();

(()=>{
    console.log('This another unamed iife');
})();

//iife with parameters

((value)=>{
console.log('your enter values is: ', value );
})('apna raj hoga');


// Another iifee

var b = 20; // use semicolon must if created this type of iife

(()=>{
    var b = 40
    console.log(b);
})()

console.log(b)