/* 
 1. What does IIFE stand for and what is its primary purpose in JavaScript?
   
   - Clearer Explanation:*IIFE stands for Immediately Invoked Function Expression. Its primary purpose is to execute a function immediately after its definition, which helps to avoid polluting the global scope by encapsulating variables within a local scope.

2. **Identify the IIFE in the following code:

   (function() {
       console.log("Hello, world!");
   })();

   Clearer Explanation: This code snippet is an unnamed IIFE (Immediately Invoked Function Expression). The function is defined within parentheses and is immediately invoked by the `()` at the end.


5. What will the following code log to the console and why?

   var result = (function(a, b) {
       return a + b;
   })(3, 4);
   console.log(result);
 
Clearer Explanation:The output will be 7. Here’s why: The IIFE is called with arguments `3` and `4`. Inside the function, it calculates the sum of `3` and `4`, which is `7`, and returns it. This returned value is assigned to the variable `result`, which is then logged to the console.

 6. Explain why IIFEs are useful for creating private variables in JavaScript.

   Clearer Explanation: IIFEs are useful for creating private variables because they create a new scope that is not accessible from the global scope. This means that variables defined inside an IIFE cannot be accessed or modified from outside the function, thus preventing accidental interference with other parts of the code and avoiding global scope pollution.




7. Can an IIFE return a value? Provide an example.
Yes, an IIFE (Immediately Invoked Function Expression) can return a value. When an IIFE is executed, it can return a value just like any other function. This returned value can be assigned to a variable or used directly in the code.

example1 : The returned value can be assigned to a variable.
var result = (function(a, b) {
    return a + b;
})(3, 4);

console.log(result); // Outputs: 7
In this example:

The IIFE (function(a, b) { return a + b; }) is defined.
It is immediately invoked with the arguments 3 and 4.
The function returns the sum of 3 and 4, which is 7.
The returned value (7) is assigned to the variable result.
console.log(result) outputs the value 7 to the console.



example2: here’s an example where the returned value from an IIFE is used directly:


console.log((function(number) {
    return number * 2;
})(5)); // Outputs: 10
In this example:

The IIFE (function(number) { return number * 2; }) is defined and immediately invoked with the argument 5.
Inside the IIFE, the number 5 is doubled, resulting in 10.
The IIFE returns the value 10.
The returned value 10 is directly used in the console.log statement.
This demonstrates how the returned value from an IIFE can be used immediately and directly without assigning it to a variable.







*/