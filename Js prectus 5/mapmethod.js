  // ........................MAP METHOD().........................//
/* In Js map function is a built-in method that create a new array with the results of applying a provided function to every element in the original array */
 
// example like 
let initialarr = [1,2,3,4,5,6,7]
let mapmethod = initialarr.map((values)=>values+10)
console.log(mapmethod);


// you can apply multiple map methods on this initial arra

mapmethod = initialarr.map((values)=>values+10)
                      .map((values)=>values-1)
console.log(mapmethod);
 

// We can also use filter methos with map method like 
mapmethod = initialarr   
                        .map((values)=>values*10)
                        .map((values)=>values-1)
                        .filter((values)=>values>25)
console.log(mapmethod);
