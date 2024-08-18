
// lets try object

let myobject = {
    name : "Umair khan",
    f_name : "Dilabaz khan",
    semester : "6th",

}
for (const key in myobject) {
 console.log(key , myobject[key]);
//    console.log(myobject);
    
}


// lets check on array what its give a responce
let fruit = ['mangoe','peach','bananan']
for (const values in fruit) {
    // console.log(values);
    // print its keys also
    console.log(values ,':', fruit[values]);
    
}

// lets try on string 

let mystr = 'University of Science Technolo bannu'
for (const key in mystr) {
 
    // console.log(mystr[key]);
     // its work
    }


// Now lets create object call it by forin loop

let University = {
    name : 'University of Science and Technology bannu',
    Best_department : ['Software Engineering','Electrical Engineering','Computer Science','Data Science'],
   About(){
        console.log('This function  is about the University of Science and Technlogy which the best department in this university');
        
    }
}

// Now access this in for loop
for (const key in University) {

    // if u access the function named detail then you access in this method
    if(typeof University[key]==='function')
    {
        University[key]()
    }
    console.log(University[key]);
    }


    // lets create object and create a  function that return a value 

    let user = {
        User_name : 'uk',
        id :10265,
        password :1101,
        ret:function userfun(){
            return `This is function about the user where names is ${this.User_name} and id is ${this.id}`
        }
    }
    for (const key in user) {

        // calling a function
    if(typeof user[key]==='function')
    {
        console.log( user[key]())       
    }
    console.log(key, ':-',user[key]);
       
    }