//------Singleton object------//
 const singleton = new Object() //This is empty object is singletong object RRRRemember this
// console.log(singleton);
//  const literal_obj = {}
//  console.log(literal_obj);// This empty object is object by literal 
 
let detail = Object() //This is manually constructing an objects and add properties.
detail.id = 2234
detail.email = 'uklearningjs@gmail.com'
detail.name = "umairkhan"
detail.skills = 'Learning the JavaScript'
console.log(detail);
//access its keys by key method and access its value by value metho
console.log(Object.keys(detail));
console.log(Object.values(detail));
console.log(Object.entries(detail)); //give every key with associated values in separated array

//Objects by literal (nested objects)
const nested_obj = {
     email : "uk@gmail.com",
     full_name : {
        username:{
            firstname :'M.Umair',
            lastname :'khan',
        }
     }
}
//console.log(nested_obj); //When print this nested objects also print inside the parent obj(nested_obj)

//if u want to access the nested objects then u will access in this way

//console.log(nested_obj.full_name) //only access the .full_name object it meas to store  the username object in full_name object

//console.log(nested_obj.full_name.username) //access only the uername object

//Access through keys

//console.log(nested_obj.full_name.username.firstname)





//-----------   Now Merging objects   ------------//

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1 , obj2} //Create a problem 
// const obj3 = Object.assign({},obj1,obj2)  //in this method there is two values one is target another is source and fully marged 
//console.log(obj3);

/* -----const obj3 = Object.assign({},obj1,obj2)----------
uper syntax may abi target may hali parenthesis thay {} us k source thy or dono target may store ho gaye or target hamry pass hali parenthesis{} tha. ab ager target ki jaga obj1 hota to obj2 obj1 k ander store hote up to so on. */


//but mostly we use the spread operator

//const obj4 = {...obj1 , ...obj2}
//console.log(obj4);

//Objects inside the arrays like

const ar_obj =[
    {
        id:1,
        email:'Example@gmail.com'
    },
    {
        id:3,
        email:'Example@gmail.com'
    },
    {
        id:2,
        email:'Example@gmail.com',
    }
]
console.log(ar_obj[1]);