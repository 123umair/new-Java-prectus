const score = 500
// console.log(score)
const marks = new Number (500)
// console.log(marks)

//now we conver these number marks into string by string method

// console.log(marks.toString());

//if you want to check its length then u will check
// console.log(marks.toString().length);

//we also  use fixed prototype 
// console.log(marks.toFixed(4)); //give the value in decimal form and give zeros after the actual value how many you enter in the method it give the precision value mostly used in ecomerce websites
const any = 134.53521
// console.log(any.toPrecision(4))


/////// Maths ////////

// console.log(Math)
// console.log(Math.abs(-53)) //absolute give positive value so its positive value will be 53
// console.log(Math.round(8.91))
// console.log(Math.floor(4.9)); //The Math.floor() static method always rounds down and returns the largest integer less than or equal to a given number.
// console.log(Math.floor(-4.1))


// console.log(Math.ceil(4.1))//The Math.ceil() static method always rounds up and returns the smallest integer greater than or equal to a given number.

// console.log(Math.ceil(-4.9));
// console.log(Math.random())
// console.log(Math.min(-1,1,3,8,9))
// console.log(Math.max(1,2,3,8,9,44))

//console.log(Math.ceil(Math.random()*10));

console.log(Math.random()*10)
//console.log(Math.floor(Math.random()*10)) //give the value from 0 upto 9
// console.log(Math.floor(Math.random()*10)+1) give the value from 1 upto 9

// if you want a randome value from 10 upto 20 range then we use this formula
// max = 20
// min = 10
// console.log(Math.floor(Math.random() * (max - min + 1) ) + min);
// min = 10
// max = 20
// console.log(Math.floor(Math.random() * (max - min + 1)) + min);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)//from 10 upto 20

console.log(Math.floor(Math.random()*6)+1) //from 1 upto 6 
