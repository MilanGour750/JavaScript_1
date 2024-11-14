//Functions Declarations
function sayname(){
    console.log("M");
    console.log("I");
    console.log("L");
    console.log("A");
    console.log("N");
}

//sayname -> no output because we have passed reference only.
//sayname()

function addnum(num1, num2){ // Paramenters -> (num1, num2)
    return num1+num2;
}
//const res =addnum(1,4) // Arguments -> (1,4) 0/p -> 5
//console.log("Result is: ",res); // o/p -> undefined

// function loginuser(username){
//     if(username == undefined){
//         console.log("Please Enter a username")
//     }
//     else{
//         return `${username} just logged in`
//     }
// }
//res = loginuser("Milan")
//console.log(loginuser("Milan"))

const user = {
    username: "MilanG750",
    price: 199
}
function handleObjects(anyobject){
    //console.log(`The Username is ${anyobject.username} and the price is ${anyobject.price} .`)

}

//handleObjects(user)
// Directly Passing the object ... 
handleObjects({
    username: "Sam",
    price: 199
})

// Passing the array....
let arr1 = [200,400,600]
function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(arr1));
