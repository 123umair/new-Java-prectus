//The Array object, as with arrays in other programming languages, enables storing a collection of multiple items under a single variable name, and has members for performing common array operations.
/* but the items or elements will be same , different not always array containe the same items it will bolean with string and number datatypes
inshort it is a mixed of datatypes.  
* arrays are writen by declared a variable and use square brackets and include the items in it.
*/

let myarr = [1, 2, 4, 5, true , 'muhammad umair'] //different items array

// /* point no2. is JavaScript arrays are not associative arrays and so, array elements cannot be accessed using arbitrary strings as indexes, but must be accessed using nonnegative integers (or their respective string form) as indexes.*/
// console.log(myarr[0]); //none-negative integers 
// console.log(myarr['one']) //cannot be accessed using arbitary strings as indexes.

/*point no3. is JavaScript arrays are zero-indexed: the first element of an array is at index 0, the second is at index 1, and so on — and the last element is at the value of the array's length property minus 1.

point no4. avaScript array-copy operations create shallow copies. (All standard built-in copy operations with any JavaScript objects create shallow copies, rather than deep copies).

SHALOW COPIES: A shallow copy of an object is a copy whose properties share the same references (point to the same underlying values) as those of the source object from which the copy was made.

DEEP COPIES: A deep copy of an object is a copy whose properties do not share the same references (point to the same underlying values) as those of the source object from which the copy was made. As a result, when you change either the source or the copy, you can be assured you're not causing the other object to change too.

EXAMPLES IS MUS ON BOTH:
*/


//methods of declaration of arrays and  methods of arrays

let arr1 = [1,2,3,4,5,6,7]

//  arr1.push(8)
//  arr1.push(9) // in push operation you will pass array arguments
//  console.log(arr1);
//  arr1.pop() //pop method will automatically remove last item from the array without passing an argument
//  console.log(arr1);

/* Shift() and unshift() methods and its works

shift()

-Removes the first element from the array.
-Returns the removed element.
-Reduces the length of the array by 1.
-If the array is empty, it returns undefined.

unshift()
-Adds one or more elements to the beginning of the array.
-Returns the new length of the array.
-Shifts all existing elements one position to the right to make space for the new elements.*/

// arr1.unshift(10)
// console.log(arr1)
// arr1.shift()
// console.log(arr1);

//print  elements of the array of shift and unshfit elemtns only 

let fruits = ['mangoes', 'apple', 'sugercan']
add_item = "peach"
fruits.unshift(add_item)
console.log(fruits)
// remove = fruits.shift()
// console.log(fruits);
// console.log(remove);
// console.log(fruits.includes("mangoes"));



//Slice and Splice

/*The splice() method in JavaScript is used to change the contents of an array by removing or replacing existing elements and/or adding new elements in place. 
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2, /* …, */ 

//splice (start)
// let num_arr = [1,2,3,4,5,6,7]
// num_arr.splice(1) //remove items from index1 to all remaining only index 0
// console.log(num_arr);

//splice (start, deletecount) deletecount is the parameter that indicates the number of elements you want to remove from the array 

// let num_arr = [1,2,3,4,5,6,7]
// num_arr.splice(1,2)//two items will be removed from this array start is index and last 2 is number of items you want to remove
// console.log(num_arr);

// splice(start, deleteCount, item1, item2) remove items and add items in place of removed items

let num_arr = [1,2,3,4,5,6,7]
console.log(num_arr.slice(-4));

num_arr.splice(2,2,'a' , 'b','c')
console.log(num_arr);

