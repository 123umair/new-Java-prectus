/* basic function syntax
function basic() {}

:-= now call back function has no name then because its execute inside the array

function () {}
*/
let myarr = ["a", "b", "c", true];
myarr.forEach(function (values) {
  // (values) these variable use as a parameter and it can take all the values of the array
  // console.log(values);
  // this is basix function
});

// we also use arrow function
/*
let schoolstd = ['umair','a','b','c','d','e']
schoolstd.forEach((items)=>{
    console.log(items);

     if u want access this array with index,values,also print with its array


    
}) */

// if u want access this array with index,values,also print with its array
let schoolstd = ["umair", "a", "b", "c", "d", "e"];
schoolstd.forEach((index, items, schoolstd) => {
  // console.log(index, ":", items, ":", schoolstd);

  // if u want access this array with index,values,also print with its array
});

// now use outside the function and call its reference to foreach and check the result

let fruits = ["apple", "mangoe", "amrood"];
function fruitvalues(fruit_names) {
  // console.log(fruit_names);
}
fruits.forEach(fruitvalues);

// we use in array of object and access values like

let objarry = [
  {
    lngName: "js",
    demand: 90,
    lngfileName: "js",
  },
  {
    lngName: "Java",
    demand: 80,
    lngfileName: "java",
  },
  {
    lngName: "Python",
    demand: 95,
    lngfileName: ".py",
  },
];

// now we access this element
objarry.forEach((accessvalue) => {
  // console.log(accessvalue.demand);
});



// lets check that for each loop can return a value or not 

let lanArr = ['Js','Python','C++','C','Java','Swift']
const expression = lanArr.forEach((items)=>{
  
  // console.log(items);

  return items       // It means that for eachloop can't return a values
})
// console.log(expression);



 // FILTER FUNCTION 

let num = [1,2,3,4,5,6,7,8,9]
//const greatval =  num.filter((values)=> values > 4) // Implicit return if want to write scope then u will return with in scope
const greatval = num.filter((values)=>{
  return values > 4  //explicite return
})
console.log(greatval);

const emptyarr = []
// if u want this output on foreach then there is one way 
 num.forEach((items) => {
  if(items > 4) {
     emptyarr.push(items)
  }
})
console.log(emptyarr);


// let another example on that filter and foreach and compared code that which code is shorter and easy

let onearry = [1,2,3,4,5,6,7,8,9,10]
const output= onearry.filter((values)=>values>4)
console.log(output);

// lets take the same output by for each loop
let emptybox =[]
onearry.forEach((items)=>{
  if(items>4){
    emptybox.push(items)
    
  }
})
console.log(emptybox);


// push some specific string of arry to another empty array
let stringarr = ['uk','apple','javascript','css','html']
let specifi_items = []
stringarr.forEach((items)=>{
  if(items.includes('u') || items.includes('j') )
  {
    specifi_items.push(items)
  }
})
console.log(specifi_items);



// Another Example
const books = [
  {
    title : 'Book One',genre : "fiction",publish : 1981,Edition : 2004
  },
  {
    title : 'Book Two',genre : "Non-fiction",publish : 1992,Edition : 2008
  },
  {
    title : 'Book Three',genre : "History",publish : 1999,Edition : 2007
  },
  {
    title : 'Book Four',genre : "None-fiction",publish : 1989,Edition : 2010
  },
  {
    title : 'Book Five',genre : "Science",publish : 2009,Edition : 2014
  },
  {
    title : 'Book six',genre : "fiction",publish : 1987,Edition : 2010
  },
  {
    title : 'Book Seven',genre : "History",publish : 1981,Edition : 2004
  },
  {
    title : 'Book Eight',genre : "Science",publish : 2011,Edition : 2016
  },
  {
    title : 'Book Nine',genre : "None-fiction",publish : 1981,Edition : 1989
  },

]

// now filter the book its genre = history  so we write
let userbook = books.filter((bk)=>bk.genre === "History")
console.log(userbook);


// write another filter that its publication year is from 2000 or more 

userbook =  books.filter((bk)=>bk.publish>=2011)
console.log(userbook);


// write another filter that book genre is science and publish in between 1885-2009and edition 2014
userbook = books.filter((bk)=>bk.genre === 'History' && bk.publish >= 1885 && bk.publish<=2009 && bk.Edition==2004)
console.log(userbook);
