//***********Operations***********//
let value = 4
let negvalue = -value
// console.log(negvalue)
// console.log(3*negvalue)
// console.log(44+5)
// console.log(44-5) Just Basic Arithmetic operations
// console.log(44/5)
// console.log(44%5)

let str1 = "hello"
let str2 = " Umair"
let str3 = str1 + str2
// console.log(str3)
// console.log("1"+2)
// console.log(1+"2")
// console.log(1+"2"+32)
// console.log("2"+2+4) //yaha par ager string first hy tho sab ko string may hi treat kiya jayega or ager string last may hy thab pehly conversion hoga jo ho 
// console.log(1+2+"32") //Now 1 is finally added to 32 and its output is 33also string 32 remains string
//For this confusion we read the Ecma script conversion standards  for conversion of different objects etc.
//here its also video on youtube of hitesh sir

//Some codes are that type like

/*

console.log( 3 + 4 * 5 % 3)

ab iska ek value zaroor ayega lekin ye thora sa confusing lgta hy
q k ab hamay ye ptha nhi hota k is may pehla operations konsa hoga 
is leye ye code exam k through say sai hy mager developer k through say belkul ghalat hy q k
develpment ap k code ki readablity achi honi chahiye na k tricky code.ab
hum ko chaahie k hum apny code ko hamesha easy readable banaye tha k parny waly ko samj may Aye.
*/


// is k barakas readable code isthara hoga
// console.log(( 3 + 4 )  * 5)

//Tricky conversion like
console.log(true) //output=true
console.log(+true) //output=1 why? kesy is k leeye standard dekna hoga ecma script but in jesy tricky question q krna code jithna simple ho ithna acha hoga lehaza hamesha code ko simple liko
console.log(+"")//output=0

