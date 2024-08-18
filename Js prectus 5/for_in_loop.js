









                    // Example 1  //
let car =
    {
        name : 'lambor_gini',
        model : '2014',
        price : '2500$',
        
    } 

for (const key in car) {
    //access keys
   console.log(key);
   
   // access keys with values
   console.log(key,car[key]);
   //obj name with the variable you assign the values of obj
   
   
}



// let some another example like
let soft = {
    field : "Software Engineering",
    demand : "Huge demand in all over the world",
    detail(){
        console.log(`This is function about the field of software Engineering`);
        
    }
}

for (const prop in soft) {
    console.log(prop,':',soft[prop]);
    
      // if u want to access the function named detail and print it
    if(typeof soft[prop] ==='function')
        {
         console.log(`Detail about this object `);
         soft[prop]()
        }   
}

// now we use arrays in for in loop 
let arr = ['skills','HTML','Css','JavaScript']
for (const key in arr) {

   //console.log(key);            // This console give the keys of the array that start from the 0 so remember . if u want to see the detail of the array keys then check its documentation
   
   // Now we check the its keys with values
   console.log(key, ':-' , arr[key]);
   
    
}


// Now also check this for in loop on map
let mymap = new Map()
mymap.set('Muk','muhammad umair khan')
mymap.set('uk',' umair khan')
mymap.set('EMuk','Engineer muhammad umair khan')

// now use for in loop

for (const keysofmap in mymap) {
    console.log(keysofmap,mymap[keysofmap]);
    
    // So again this is not possilbe when we see the notes of the for in loop this is not iterateable object     

}
