/* We can decalred objects by two parts one is by literal and 2nd is by constructor
when we declared object as a literal then can't create a singleton . When an object is created by a constructor method then singleton is created. */

// Object declaration method 
// (1) Object literals

const uk = {
    yourname : 'M.Umair khan',
    CNIC_no : 1110135571863,
    Your_Skills : ['Html','CSS','JavaScript'],
    Email : 'Ukmicrosoft@gmail.com',
    current_work : "Learning JavaScript"
}
// if we change any object values
uk.yourname = 'MYKKK'

//console.log(uk); //accessed by basic method 

/*  For interview purpose and advanced method that we are important to know and use this trick to acces any keys in objects */

//console.log(uk["Your_Skills"]);

/* when access keys like that than we can't use dot between them Remember this in objects also key values basically its type is a string. */


// Here Another example of objects. that we should use different methods in them are:

const tricky = {
    std_name : 'saqib',
    'Father_name' : 'Rashid khan',
    relation :'Friend',
    // message : `These student name is ${std_name} and my relation with this friend is ${relation}`

}
//now we access by keys
// console.log(tricky["name"]);
// console.log(tricky["Father_name"]);
// console.log(tricky["relation"]);


 // Here example no.3 We include a Symbol and check how i access this Symbol
 
 // First of all we declared the symbol

 const oursymb = Symbol('myid') // 'myid' is a description and this discription for multiple symbol keys like (oursymb)
 const Symb_obj = {
    name : 'Chai or code',
    skills : ['html' , 'css' , 'js'],
    [oursymb] : "include symbol in this object and learn how to declared this symbol inside the object",
    email : "ukjslearning@gmail.com"
}
console.log(Symb_obj);
// console.log(typeof Symb_obj[oursymb]);
//if we use freez method then the no change will be occured
Symb_obj.name = ('Milk our code')
console.log(Symb_obj);
// Object.freeze(Symb_obj)
Symb_obj.name = ('Engineer Muhammad Umair khan')//not changes will be occured after freeze


// Now we add a function to this function
Symb_obj.greeting = function() {
    console.log(`hello JavaScript learner ${ this.name}`);
}
console.log(Symb_obj.greeting());//  اس سے فنکشن کال ہوگا 
console.log(Symb_obj.greeting);//  جبکہ یہ صرف فنکشن کا حوالہ دے گا۔۔ کہ یہ فنکشن ہیے 




/* Objects in JavaScript are collections of properties, where each property is associated with a key. They can store various types of data, including numbers, strings, arrays, and even functions (methods). Objects are used to group related data and functionalities, making it easier to manage and manipulate.

Example Use Cases of Objects:

Storing User Data: An object can store user details like name, email, and preferences.
Configurations: Objects can hold configuration settings for applications.
Representing Real-world Entities: Objects can model entities like cars, books, and users with their attributes and behaviors. */


//For more information we can create one wnother fucntion simple 

let newobj = {
    car_name : "lamorgini",
    model : 2024 ,
    publish_year : 2024 ,
    read : function () {
        console.log(`This object is created by muhammad Umair khan for ${this.car_name} Car`);
        
    }
}

newobj.read() //calling only function we easily undertand about these object.