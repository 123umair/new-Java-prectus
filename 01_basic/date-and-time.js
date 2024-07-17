// const date = new Date()
// console.log(date);
// console.log(date.toString())
// console.log(date.toDateString());
// console.log(date.toISOString());
// console.log(date.toLocaleDateString())
// console.log(date.toLocaleString()) //This method is more clear and concise and easy to understand
// console.log(date.toLocaleTimeString());


//let mydate = new Date(2024 , 0 , 5)
//console.log(mydate.toLocaleString());

//let mycreateddate = new Date("2024-4-5") //yy-mm-dd formate 
// console.log(mycreateddate.toLocaleString());
let dateformate = new Date("01-14-2024")
// console.log(dateformate.toLocaleString())
//console.log(dateformate.getTime()); //it will give you the time from 1st january in miliseconds from where the date you entered 

//for time stamp
 let ourdate = new Date()
console.log(ourdate.getDate());
console.log(ourdate.getMonth()+1); //months start from 0 so adding +1 will give the exact month with number 7 july without +1 it will be july butg in no. it will be on 6 which is confusable for human
console.log(ourdate.getDay());// output will be 2 means tuesday

let mynewdate = Date.now()
//console.log(mynewdate); //it will give the current time stamp but in milli seconds remember that

//when you change this current time-stamp into seconds its a very important question for interview purpose
//console.log(Math.floor(ourdate/1000)); // now the same value in seconds not in mili scnds/





/// Print a message of current time year date
let currentdate = new Date()
let year = currentdate.getFullYear()
let month = (currentdate.getMonth()+1)
let day = currentdate.getDay()
let sec = currentdate.getSeconds()
let minutes = currentdate.getMinutes()
let hours = currentdate.getHours()

message = `The current date is ${day} ${month} ${year} and the time is 
${hours}:${minutes}:${sec}`
console.log(message);
//by new Date() object we print all the current time and date so we remember this must thanks 
