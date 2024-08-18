// for (let i = 1; i <=10; i++) {
//     const element = i
//     console.log(element);    
// }

// Modifie the uuper program and detect the value 5 us if condition
 
/*for (let i = 1; i <=10; i++) {
    const element = i
    if(element == 5)
    {
        console.log('Value 5 is detected'); // print value 5 is detected
    }
    console.log(element);     // 5

}  */

// If u want to stop the loop when our target value is detected then u will use the break in them 

for (let i = 1; i <=10; i++) {
    const element = i
    if(element == 5)
    {
        console.log('Value 5 is detected'); // print value 5 is detected
    }
    console.log(element);     // 5

}



// Use nested loop  like
for (let i = 1; i <=10; i++) {
   console.log(`This is outer loop ${i}`);
   for (let j = 1; j<=10 ; j++) {
    console.log(i +  ' * '  + j + ' = ' + i*j);
    
    // table from 1 to 10
    
   } 
    
}


// Use array

let myarr = [1*2,2*3,3*4,4*5,5*6]
console.log('This is arra lent',myarr.length)
for (let i = 0; i <myarr.length; i++) {
    const element = myarr[i];
    console.log(element);
}

// If u want items for arrays in array from one by one 
let heroarr = ['superman','spiderman','henry Cavil']
console.log(heroarr.length);
for (let  i  = 0;  i  < heroarr.length;  i ++) {
    const element = heroarr[i];
    console.log(element);
    console.log([element])
}

     
    


// if u want a specifi number and if detect it u want to  loops and cannot execute more looop

for (let i = 1; i <=10; i++) {
   
    if (i == 6) {
        console.log(`Your target value is detected ${i}`);
        break
    
      //if value is 6 and then come  console to the if statement and now  loop will stope and jumped console to the line no 78 come out from the loop
    
    }
    console.log(`value of i is ${i}`) 
}

for (let i = 1; i <=10; i++) {
   
    if (i == 6) {
        console.log(`Your target value is detected ${i}`);
        continue
    
        // continue will allow  you to execute the loop  complete
    
    }
    console.log(`value of i is ${i}`) }



// Use of function in for loop (iife)
// for (let i = 0; i < 10; i++) {
//     console.log(`${i}`);
//    (() => {
//         console.log(Math.floor((Math.random()*6)+1))
//     })()
// }


// Use for loop and also generate some random function and detect any random value by detection its give good explanation of any student,compny etc 

for (let i = 0; i < 4; i++) {
    console.log(`outer_loop ${i}`,)
    let randomeval = Math.floor(((Math.random()*3)+1))
    console.log(`first random values is ${randomeval}`);
    
    let arrobj = [
        {
            name : "umair",
            skills : ['Css','Boostrap','JS',"HTML"],
            id : 1
        },
        {
            name : "Sikander",
            skills : ['Css','Boostrap','JS',"HTML"],
            id  : 2 
        },
        {
            name : 'Senior developer',
            skills : 'MERN STACK Developer',
            id  : 3
        },
    ]
    // if( randomeval == 1 )
    // {
    //     console.log(arrobj[0].name.skills.id);
        
    // }
    // else if(randomeval == 2)
    // {
    //     console.log(arrobj[1]);
    // }
    // else if(randomeval == 3)
    //     {
    //         console.log(arrobj[2]);
    //     }
    switch (randomeval) {
        case 1:
            console.log(arrobj[0]);
            break;
            case 2:
                console.log(arrobj[1]);
                break;
                case 3:
                    console.log(arrobj[2]);
                    break;
        default:
            break;
    }
}



// Now use thir program in switch case 
