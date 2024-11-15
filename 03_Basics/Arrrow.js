// This -> current event ke baare mai '

const user = {
    username: "MilanG750",
    price: 999, 

    welcomeMsg : function(){
        // console.log(` ${this.username} , Welcome To Website`)
        // console.log(this) // it will print the corent current context i.e Sam and MilanG750
    }
}

// user.welcomeMsg() // o/p MilanG750 welcome to website
// user.username  ="Sam" // context changed from milan to sam 
// user.welcomeMsg() // o/p Sam, Welcome to the website
// console.log(this) // o/p -> {} because there is no global scope present 

function chai(){
    //console.log(this); // console.log(this) o/p -> Undefined
}
chai() // Will get global values

const chai1 = () => {
    let username = "Hitesh"
    //console.log(this)
}
//chai1()

// Explicit Arrow Function
const addTwo = (num1,num2) => {
    return num1+num2
}
console.log(addTwo(3,4))

// Implicit Arow Function 
// const addTwo = (num1,num2) => (num1+num2) // Agar curly hai toh retuurn likna aniwarya hai
// const addTwo = (num1,num2) => num1+num2 // Parenthesis or bina parenthesis mai return na bhi likho toh chalega
// console.log(addTwo(3,4))

