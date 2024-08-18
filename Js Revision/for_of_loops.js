// Ok we prectus some of advaneced loops 

let news_name = ['Geo news' , 'Express News' , 'Ary News' , 'Dunya news']
for (const element of news_name) {
    console.log(element);
    
    // For of loops give direct the values of the iterable objects
    
}

// Lets try on map
let ukmap = new Map()
ukmap.set('js','javaScript')
ukmap.set('HTML','Hypher text mark up language')
ukmap.set('CSS','Cascading style sheet')   //Do not allow the duplicate keys remember this point
ukmap.set('React js','React js is the library of the javascript ')
console.log(ukmap);

// we will print this map method with only values 
for (const values of ukmap) {
    console.log(values);
    
}


// ok let create another map method and access values with keys values
let commap = new Map()
commap .set('netsol','High ranked company of software')
commap .set('neversol','Mid level ranked company of software')
commap .set('softsole','Low level ranked company of software')
for (const [keys , values] of commap) {
    console.log(keys , '=' , values);
    
}


// We can also check the string its also literal object of iterator constructor 

let mystr = 'Muhammad Umair khan'
for (const chr of mystr) {
    console.log(chr);
    // Its print all the character of the our name include with space
}