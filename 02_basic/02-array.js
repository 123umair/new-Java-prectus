//array 2nd part
let string1_array = ['Batman','Superman','Flesh']

let string2_array = ['umair','skills','html','css','bootstrap','javascript']

//string1_array.push(string2_array)

 //by this trick push method will push all the array insude the string1-array and its in string-1 array the string2-arrats its behave as a single element when we print the last index it will print these array

// console.log(string1_array);

//console.log(string1_array[3]);

/*
these index 3 will give the string2-array that we have pushed inside the 1st array and its consider as a single element its index is 3
*/

//if you want to print the index 3 in the array string2-array then we print like that

//console.log(string1_array[3][3]); 

/* first 3 is the indext of the full 2nd array and the last 3 is the index inside 

string2-array and prints its index element in string2 array */

// Combine Both Arrays and make new single array by concate method //

let both_array = string2_array.concat(string1_array)
// console.log(both_array);

// We also use spread operator for multiple arrays to make a single new array like

let all_items = [...string1_array,...string2_array] //mostly used this spread operator
// console.log(all_items);

// Nested Array

//let multiple_array = [1,2,3,4,['umair','aslam','zahid'],8,[-1,-2,-3,-4,[44,54,45,56,45]]] 

//so this is nested arrays first we check its indexes of elements of every arry
/*console.log( multiple_array[2]);
console.log(multiple_array[4]); //print a whole array of string
console.log(multiple_array[4][2]); //print inside the elements in the string array output:zahid
console.log(multiple_array[6]);//print another negative array at this index
console.log(multiple_array[6][4]);//print another array inside this array which this index in 6
console.log(multiple_array[6][4][4])*/
/*
 chatgpt code with info
let multiple_array = [1, 2, 3, 4, ['umair', 'aslam', 'zahid'], 8, [-1, -2, -3, -4, [44,54, 45, 56, 45]]];

console.log(multiple_array[2]); // Output: 3
Accessing the third element of the main array, which is 3.

console.log(multiple_array[4]); // Output: ['umair', 'aslam', 'zahid']
Accessing the fifth element of the main array, which is an array of strings.

console.log(multiple_array[4][2]); // Output: zahid
 Accessing the third element of the array within the fifth element of the main array.

console.log(multiple_array[6]); // Output: [-1, -2, -3, -4, [44, 54, 45, 56, 45]]
 Accessing the seventh element of the main array, which is an array of negative numbers and another nested array.

console.log(multiple_array[6][4]); // Output: [44, 54, 45, 56, 45]
 Accessing the fifth element of the array within the seventh element of the main array, which is another array.

console.log(multiple_array[6][4][4]); // Output: 45
 Accessing the fifth element of the nested array within the fifth element of the array within the seventh element of the main array.*/


//we use flat method to combine this all nested arrays
// let multiple_array = [1,2,3,4,['umair','aslam','zahid'],8,[-1,-2,-3,-4,[44,54,45,56,45]]] 
// let Single_array = multiple_array.flat(Infinity)
//Without using the infinity we use as a dept  flat method in JavaScript, the depth parameter specifies how deeply nested arrays should be flattened. 
let myarr = [['a','b'],['c','d'],['e','f'],['g','h']]
new_arr = myarr.flat()//by Default it will be 1st dept and this array contains only one dept
console.log(new_arr);

//twolevel dept array focus on its syntax
let twolevel = [1,[3,4],5,6,] //two level dept array
let flattened_arr = twolevel.flat()
console.log(flattened_arr);

//three level dept array
//A 3rd level depth array means that the array contains nested arrays, and those nested arrays themselves contain further nested arrays. 
let threelevel =[1,[3,4,['a','b','c']],5,6,[-1,-2,-3]] 
let fl_arr = threelevel.flat() //first dept output= [ 1, 3, 4, [ 'a', 'b', 'c' ], 5, 6, -1, -2, -3 ]
let second_dept = threelevel.flat(2)
console.log(fl_arr);
console.log(second_dept) 
/* output = [
  1,   3, 4, 'a', 'b',
  'c', 5, 6, -1,  -2, 
  -3
]*/ 

// We also use this metho for remove the empty spaces in array like
// let arry = [1,2,3,,6,7,8]//1,2,3,6,7,8
// let array = arry.flat()
// console.log(array);

// Array.isarray , from and of
/*
The Array.isArray() static method determines whether the passed value is an Array.
*/

let newstring = 'Hello , world'
console.log(Array.isArray(newstring)); //false
//use from to change this string to array
console.log(Array.from(newstring)) //change this to array now

//lets take us some variable and now xheck it
let score1 = 50
let score2 = 70
let score3 = 60
console.log(Array.of(score1,score2,score3)); //[ 50, 70, 60 ] in one array


