// Exploring different interview questin through different technques

// === use cases
// 1. write code to get array of names from given array of users.
// 2. Get back  only active users.
// 3. Sort users by age descending

const users = [{

    id: 1,
    name:"Umair",
    isActive:true,
    age:20
},
 {

    id: 2,
    name:"Technical suneja",
    isActive:true,
    age:20
},
 {

    id: 3,
    name:"Hitesh Choudary",
    isActive:false,
    age:20
},
]

 users.forEach((active) => {
   
   if(active.isActive === true)
   {
   console.log(`your active status is:${active.isActive} : named ${active.name}`)
    
   } 
    
   if(active.age === true)
   {
    userage = active.age.sort()
    console.log(`name:${active.name} its age is ${userage}`);
    
    
   }
    
});

