//var c =30 
let a =100
let b = 200
if (true){
    let a = 10;
    //console.log("Inner Scope of a: ",a)
    const b=20
    //console.log("Inner Scope of b: ",b)
    //var c =30 
}

//console.log(a) // error because a is a block scope cant be accessed from outside
//console.log(b)// error because a is a block scope cant be accessed from outside
 //o/p-> 30 as var do not follows the concept of scopes

// ************************************************************************************ //
// nested scope

function one(){
    const username = "MilanG"

    function two(){
        const website = "Visual Code"
        // console.log(username) // It will print the user name as it will take parent function as gobal scope
    }
    // console.log(website) // throw an error because we trying to acess out of the scope 

    two()

}
one()


if(true){
    const name = "Milan"
    if(true){
        const channel = " Milanzzz"
        //console.log(name + channel)
    }
    //console.log(channel) // declared outside the scope
}
// console.log(name) // declared outside the scope



// +++++++++++++++++++++++ INRESTING +++++++++++++++++++++++++++++++++++++ //

function f1(num){  // basic function 
    return num+1
}
console.log(f1(3))

//Hosting concept 
console.log(f2(6)) // it will show error because f2 is declared or made using variable so thats why it cant run 
const f2 = function(num){ // stored as variable
    return num+2
}
console.log(f2(3));



