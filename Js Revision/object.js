
/*
1)Create a simple objects
2) add one symbol and access it
3) add also a function 
4)Also access it and add by different tricks
5)Like add inside the objects outside the objects also give the reference of the objects to another objects and change the values
6)Create a manuall constructing object and add properites
7)Use keys function,values function and entries function
8)Create one nested objects
9)Create two objects and merge them using spread operator
10) Create objects in arrays
11) Create objects with destructuring
12) Destructure the objects properties with new variables.
*/

/* 1)Create a simple objects
2) add one symbol and access it
3) add also a function 
4)Also access it and add by different tricks
5)Like add inside the objects outside the objects also give the reference of the objects to another objects and change the values */
let unque = Symbol('myfirst')
let obj = {
    name : "umair",
    roll_no : 2,
    [unque]:"oursymbol",
    read : function(){
        console.log(`this is a function and my goal is to cleared the question`);
    }
}
console.log(obj);
//access symbol
console.log(obj[unque])//when we acces keys with square bracket [] with do not use obj with . dot 
obj.read()
let newobj = obj
newobj.read = function(){
   console.log(`Hey this is new function modified by newobj ${this.name}`);
}
newobj.read()
console.log(Object.values(newobj));
console.log(Object.keys(newobj));
console.log(Object.entries(newobj));

/*
6)Create a manuall constructing object and add properites
7)Use keys function,values function and entries function
*/
const manual =  Object()
manual.name = 'Umair'
manual.skills = 'frontend developer'
console.log(Object.values(manual));
console.log(Object.keys(manual));
console.log(Object.entries(manual));

/*
Create two objects and merge them using spread operator
*/

const  pehla = {
    name:'umair',
    roll:'medium',
}
const detail = {
    address:"Ghani baiest khel bannu",
    contact : '231456897'
}
//now we merge them
const mergeobj = {...pehla,...detail}
console.log(mergeobj);

// 10) Create objects in arrays
let objarray = [
    {
        username : "uk",
        email :"ukemail@gmail.com"
        
    },
     {
        username : "OG",
        email :"OGemail@gmail.com"
        
    },
     {
        username : " ch",
        email :"chemail@gmail.com"
        
    }
]

console.log(objarray);
console.log(objarray[1]['email']);
console.log(objarray[2].email);

/*
11) Create objects with destructuring
12) Destructure the objects properties with new variables.
*/
let car = {
    name : 'Grand Wagnoeer',
    price : '27,700,000',
    car_type: "Jeep",
    about: function()
    {
        console.log(`This function about car its name is ${this.name} and its price in PKR is ${this.price} and its car_type is ${this.car_type}`);
    }
}
//now destructuring
let {name , price , car_type, about} = car
console.log(name);
console.log(price);
console.log(car_type);
about()


//Now assigning new variables
let {name:car_name,price:car_price,about:all,car:about_car}=car
console.log(car_name,car_price,car_type);
all.call(car)