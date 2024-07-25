 
 /* Now we learning about object destructuring 

 Object-destructuring: Object destructuring is a convenient way to extract specific properties from an object and assign them to variables. It allows you to write cleaner and more readable code.
  Here's a simple example: */
  
  let course = {
    Subject : "Javascript",
    price : "free",
    Instructor : "Hitesh choudhary",
    Read : function () {
        console.log(`This object is related to the course where the name of the subject is  ${this.Subject} and the price ${this.price} nd this course is Intruct by ${this.Instructor}`);
         
    }
  }
//Now basic access of keys 
// console.log(course.Subject);
// console.log(course.price);
// console.log(course.Instructor);

/*
 Method for revision [keys,values, access through methods]
console.log(Object.keys(course))
console.log(Object.values(course))
console.log(Object.entries(course))
*/
 
//Now we are destructuring this object 

// let  {Subject , price , Instructor , Read} = course
// console.log(Subject);
// console.log(price);
// console.log(Instructor);
// Read()


// Destructuring with renaming new example

const system = {
    name : "iphone",
    year : 2024,
    price : '4lac'

}

const {name : Device_name , year: release_date , price: value  } = system

console.log(Device_name,release_date,value);





