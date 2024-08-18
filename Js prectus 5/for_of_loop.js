/*
The for...of loop in JavaScript is  a modern and convenient way to iterate over iterable objects.

Iterable Objects: An iterable object is any object that implements the iterable protocol.

Iterable Objects Example:

1) Arrays:Arrays are built-in iterables. They provide an iterator that allows you to access each element sequentially.

2) Strings: Strings are also iterables. You can iterate over each character in the string.

3) Sets: Sets are iterables that store unique values. You can iterate over each value in a set.

4)Maps: Maps are iterable objects where each element is a key-value pair.



Iterable protocol: This protocol allows these objects to be iterated over, meaning you can access their elements one by one using iteration constructs like for...of loops.

Iteration: In programming, iteration generally means accessing and processing the values of a collection of items one by one. This is a common operation when working with arrays, lists, sets, or other data structures.


Understanding Iteration: Iteration involves systematically going through each element in a collection, such as an array or an object, to perform some operation or access the values.


                    ::::::::Iteration Constructs::::::::::

1) for...of Loop: Used to iterate over the values of iterables.

const array = [1, 2, 3];
for (const value of array) {
  console.log(value); // Logs 1, 2, 3
}

2) for Loop: Commonly used for iterating with indices.
const array = [1, 2, 3];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]); // Logs 1, 2, 3
}

3) forEach Method: A method available on arrays that allows you to execute a function for each item.

const array = [1, 2, 3];
array.forEach(value => {
  console.log(value); // Logs 1, 2, 3
});
*/  

// Now we create a basic program

let firstarray = ['umair','khan','Wishing to make a frontend developer']
for (const items of firstarray) {
  console.log(items);  

  // Now the iterator is for loop and it calls the items of the arrays and assign values to the items. which we can access

}


// Lets try on string

let firststr = "Hello WOrld~"
for (const character of firststr) {
  console.log(character);
  // So in this method i will print all the character of the string
}


// Map : Map is an objects . It is a collection of key value pairs.A key in the Map may occure only once. There is no duplicate value in the map only unique value is available in the map.

let map = new Map()
map.set('Pk',"'Pakistan'")
map.set('USA',"'United state America'")
map.set('Bg',"'Bangladesh'")
console.log(map);


// Another example of Map and also enter the duplicate values to check its print of not
let anothermap = new Map()
anothermap.set('company1','Netsol')
anothermap.set('Company2','Neversole')
anothermap.set('company3','Uraan training center')
anothermap.set('company3','Uraan training center') //  This key will not print because this key is duplicate with value
console.log(anothermap);

// Now use the for off loop on another map value and access it values
/* for (const value of anothermap) {
  console.log(value);


  
}*/

  // Now if you want to print its keys and values also now we use these syntax  
  for (const [key , value] of anothermap) {
    console.log(`${key} ':-' ${value}`); 
  }


// for off loop can't apply on the object let prove that
let obj = {
  name:'Umair',
  fathername : 'Dilabaz khan',
  Field_of_study : 'Bsc in Software engineering'
}

for (const values of obj) {
  console.log(values);
  
  // So if we see in the upper notes then the object is not the iterable . So we can't use an iteration constructs for of loop .

}


// print with values and keys 


