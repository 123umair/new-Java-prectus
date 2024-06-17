// console.log(2<4)
// console.log(2>4)
// console.log(2>=4)
// console.log(2==4)
// console.log(2<=4) This is best conversion because the same data type.
// console.log(2!=4) This is clear comparison and you can't confuse in them.

//some other comparison that you will be confused like..    
// console.log("2">5)
// console.log("02"<5) 
// yaha par java automatic is string ko number may convert krta hy

// console.log(null < 0)
// console.log(null > 0)
// console.log(null == 0)
// console.log(null >= 0)

//The reason is that an equality check == and comparisons > < >= <= work differently.
// Comparisons convert null to a Number, treating it 0.
// That's why (4) null >=0 is true and (1) null > 0 is false.

// console.log(undefined < 0)
// console.log(undefined > 0)
// console.log(undefined == 0)
 
// now we use triple equal ===
console.log("2"===3)
//ab ye comparision nhi hoga q k === euqual may data type dono k check ho k result day ga hamay jo k ab yaha par ek string or ek number hy or iska answer false hoga
//
//tho hamay is jesy comparisons sy bachna hoga tha k confuse na ho.
