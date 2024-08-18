
// ......................... Truthy and Falsy values Concept .......................//
/*
    Truthy values: Truthy values hamaary pass wo values hoty jo usy laga k assume kary k ye sahi or true hi  hoga.
    Falsy values: Falsy values hamaary pass wo values hoty jo usy laga k assume kary k ye Ghalaty or false hi  hoga.

    ********** Important for interview perspective *************

    Falsy values : false , 0 ,-0 , BigInt 0n, "" , null , undefined , NaN

    Some Truthy Values : " " or " 0" or "false" etc string inside the values are not false its consider as a true " " In this string space inside
    1)  " or " 0" or "false"
    2) {} empty object is also consider as a true vale
    3) [] emty arry also consider as a true value 
    4) function(){} this is empty function with no parameters and definition with name also consider as a truthy
    5)
*/ 
    // let falsy = undefined // or
    let falsy
    if (falsy) {
        console.log('Hey im executed first');
    }
    else {
        console.log('In else statement');
    }

// check some truthy Also check the correcrt way of check the condition of the empty array in a correct way
/* let emptyarr = []
if(emptyarr)
{
    console.log('The emtpy arry is a true value')
}
else{
    console.log('The else statement');
}

  (correct way to check the array)

let checkarray = []
if(checkarray.length === 0)
{
    console.log('Your array is empty array')
}
else{
    console.log('The else statement');
}
*/

// Also same  for emtpy obj

let emptyobj = {}
if(Object.keys(emptyobj).length === 0)
{
    console.log(`Your object is empty also its a truthy value`);
}
else{
    console.log('access with correct way');
}

let value = 'Hello'
if(value)
{
    console.log('Hello if statement is executed ');
}
else{
    console.log('hello This is else statement is executed ')
}


// Null colescing operator ?? = null and undefined
let val1 = 5 ?? 10
console.log(val1)
let val2 = null ?? 10
console.log(val2)
let val3 = null ?? undefined 
console.log(val3)

let val4 = null ?? undefined ?? 55
console.log(val4)

let val5 = null ?? 50 ?? 520
console.log(val5)



// Terniary Operator

// Check condition basic  true and false

let priceoftea = 50
priceoftea <=40 ? console.log("less then 40"):console.log("Greater then 40")