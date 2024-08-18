// lets try on for each loop how its work which iterable object will iterates on this 

// Check fist array
let chararr = ['a','b','c','d','e','f']
chararr.forEach(function (items,index,chaarr) {
    console.log(items,index,chararr);
    
});

// now use external function
let items = ['headlight','bumper','tier']
function detail(values)
{
    console.log(values);
    
}

items.forEach((detail))


// User array function in them
let arryobject = [
    {
        name : 'umair',
        id :1
    },
    {
        name : 'khan',
        id :2
    },
    {
        name : 'Engineer',
        id :2
    },
]
arryobject.forEach((keys)=>{
    console.log(keys,keys.name);
    
})