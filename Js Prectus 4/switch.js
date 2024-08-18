// Switch Case Basice Syntax given below  It used alternative of if ..else statement 
/*
switch (key) {
    case value:
        
        break;

    default:
        break;
}
*/

let month = 'September'
switch (month) {
    case 'february':
        console.log('This is febuary');
        break;
    case 'January':
        console.log('This is January');
        break;
    case 'March':
        console.log('This is febuary');
        break;
default:
    console.log("if not values not match with key then i will execute this is default statement");
    break;
}



let numberic = 4
switch (numberic) {
    case 1:
        console.log('Its me ');
        break;
    case 2:
        console.log('Its me case 2 ');
        break;
    case 3:
        console.log('Its me case 3');
        break;
    case 4:
        console.log('Its me case  4');
        break;
   default:
    console.log('give the valid value');
        break;
}