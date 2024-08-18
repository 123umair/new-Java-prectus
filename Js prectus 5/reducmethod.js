// ..................... Reduce Method () ............................ //
/* The reduce() method in JavaScript is used to reduce an array to a single value by applying a function to each element in the array. It's a powerful method for aggregating or transforming data in an array.

The reduce() method takes two arguments.

1. A callback function (also called the "reducer" function) that is called on each element in the array.
2. An initial value (optional) for the accumulator.

In the reduce() method, the browser or js engine knows the purpose of each variable based on their position in the callback function's parameter list.

example :
reduce(accumulator,cuurentVal)
1.Accumulator the first parameter is always theaccumulated value. It's the result of the previos iteration, or the inital value if it's the first iteration. you will use another named but first parameter should be accumulator in reduce method.


2. currentVal the scond parameter is always the current element being processes in the array.\
*/

//   LLLets try Basic program to know how they work then change into arrow function

/*
let numbers = [1,2,3]
const total = numbers.reduce(function (acc,currentVal) {
    console.log(`accumulater:,${acc} value of total: ${currentVal} `);
    
    return acc + currentVal
},0 )
console.log(total)
                                  */

// now in arrow function
let numbers = [1,2,3]
const total = numbers.reduce((acc,currentval)=> acc + currentval , 0)
console.log(total);

const shoppingcart = [
    {
        name : 'js course',
        price : 10000
    },
    {
        name : 'App course',
        price : 15000
    },
    {
        name : 'Data Science',
        price : 160000
    },
]
const totalPrice = shoppingcart.reduce((acc,cart_item)=>acc+cart_item.price,0)
console.log(totalPrice);
