// const name = "Umair"
// const value = 50   
//console.log(name + value) // or
//console.log("umair" + 50) // So this both are string concatination but is outdated 
//
////Updated way of string concatenation is very different easy and readable and modern
////Called string interpolation and we also directly inject the variables with placeholders this is the modern way of string concantenation
////console.log( `My name is ${name} and my value is ${value}` )
//
//
////############ How to delcare the string ::::::::::://
//
//const name = "Umair" //This is basic declaration
//const value = 50  
//
//Another type of string declaration is 
//const gameName = new String("umair_khan") //this is the String Object method where we create an object for a string.
///there its only copy reference to the UpperCase() there fore the remains value will be same 
///console.log(gameName)
/// console.log(gameName.toUpperCase());
///---------note-------//
///Therefore, toUpperCase() is a method that operates on strings to produce a new string in uppercase, rather than creating a new object.
//
///here one another method of key value pairs
///console.log(gameName[0]);//gameName is a string object containing the string "umair_khan"
///gameName[0] //accesses the first character of the string, which is "u".
///Although you can access characters in a string using an index (similar to an array), strings are not arrays. They are sequences of characters.
//
///---- Lenght fuction---//
//let Eng = "Muhammad Umair khan"
//console.log(Eng.length) //also count spaces between the string
///---charat()---///
//console.log(Eng.charAt(13))//At 13no.my name character is "r"
//
// indexof()function //
//console.log(Eng.indexOf('M')) //index of function give the index of the give character or words which start from 0
// let arr = ['umair' , 'khan' , 'software' , 'engineer']
// console.log(arr.indexOf('khan'));
// console.log(arr.indexOf('engineer'))
// console.log(arr.indexOf('CSS'))//here this is not an element of the given array so its value is -1 that represents that this value is not present -1 if not found.
//
///Anoter Function is SUBSTRING() ****************//
//
///*String.prototype.substring() (from mdn)
//The substring() method of String values returns the part of this string from the start index up to and excluding the end index, or to the end of the string if no end index is supplied.*/
//
///working:
//
///let New = "Software_Engineering"
///console.log(New.substring(0));//it will give the full name
///console.log(New.substring(0,9)) //it will give only the from 0 to 8 characters according to definition(excluding the end of the index)
///console.log(New.substring(9,0))//it will give the same result (9,0) 
///* Reason of this (9,0)
//New.substring(9, 0):
//
//substring method will swap the indices if start is greater than end, effectively calling substring(0, 9).
//So, it will also return "Software_".*/
///console.log(New.substring(9,3));
//
/// Trime prototype function() //
/// The trime method removes white spaces from the both ends of a string and returns a new string, without modifying the original string.
//
// To return a new string with whitespaces trimmed from just one end, use trimmed from one just one end, use trimStart() or trimEnd().
///  let my_name = " Muhammad_Umair_khan    "
/// console.log(my_name.trim());
///  console.log(my_name); 
//
//
///  ----------Slice() Prototype-----------------//
//
///Slicing refers to extracting a portion of an array or string and creating a new array or string with the extracted elements.
//
//let myarr = ['umair', 'my skills is ', 'HTML' , 'CSS' , 'JAVASCRIPT']
/// console.log(myarr.slice(1)); //starts from positive indecies
/// console.log(myarr.slice(-4, -1));//starts from backward its negative values but its result is [] array because the start is greater from the end its the rule that if the negative start is greater or equal to the array of the lenght it will be empty
//console.log(myarr.slice(-3));
//console.log(myarr.slice(3));//begginning of the array
// console.log(myarr.slice(6));
// console.log(myarr.slice(-45));
// console.log(myarr.length);
// 
///special notes for that//
///JavaScript slice Method Overview
//
//The `slice` method extracts a section of an array and returns it as a new array.
//
//Syntax
//
//```javascript
//array.slice(start, end)
//```
//
//`start`: The index to begin extraction.
//`end`: The index before which to end extraction (not included).
//
// Usage Examples
//
// Positive Indices
//-Example Array : `let arr = ['a', 'b', 'c', 'd', 'e'];`
// 
//-Extract elements from index 1 to the end:
//
// arr.slice(1); // ['b', 'c', 'd', 'e']
// 
//
// - Extract elements from index 1 to 3 (excluding 3):
//
// arr.slice(1, 3); // ['b', 'c']
//
//
//Negative Indices
//- Negative indices count from the end of the array.
//
// - Extract elements starting from the second-to-last element to the end:
//
// arr.slice(-2); // ['d', 'e']
// 
//
// - Extract elements from the third-to-last to the second-to-last element:
// 
// arr.slice(-3, -1); // ['c', 'd']
//
//😍 Special Cases 😍 
//
//- Empty Array When `start >= end`:
// 
// - If `start` is greater than or equal to `end`, `slice` returns an empty array (`[]`).
// 
// arr.slice(-1, -3); // [ ]
//
//
//- Out-of-Range Indices:
// 
// - If `start` is out of range (too negative), it defaults to `0`.
// 
// arr.slice(-45); // ['a', 'b', 'c', 'd', 'e']
// 
//
// - If `start` is out of range (too large), `slice` returns an empty array (`[]`).
// arr.slice(45); // []

//Replace Function 
const url = "https://softengineerumair%20.com"
console.log(url.replace('%20','_'));

//include method to check whether the data is include or not

let product = ['banana' , 'orange' , 'Mango']
console.log(product.includes('banana')); //true
console.log(product.includes('Amrood')) //false


//Split Function

let string = 'umair-khan'
let another = 'muhammad'
console.log(string.split('-'));
const sentence = "The quick brown fox jumps over the lazy dog."
const check = sentence.split('')
console.log(check);
console.log(check[4]) 