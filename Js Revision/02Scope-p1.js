var one = 10
if(true)
{
    var two = 20
    console.log(two); //This is block scope
}
console.log(one);

//functioni scope
function data ()
{
    const id = 5
    // return
    function nest(role) {
        let strole = role 
        console.log("Your role is:",strole);
        
    }
    console.log(nest('gf'));
}
data()


