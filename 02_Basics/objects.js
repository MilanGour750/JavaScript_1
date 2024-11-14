//object stores data in key value pairs. 
// Literal se agar object banega toh wo singleton nahi rahega 
// constructors se banega to singleton banega 

// object literals
//Object.create() // This is cosntructor method

let mysym = Symbol("key1") //create a key 

let user1 = {
    name: "Milan",
    age: 22,
    college: "VIT Bhopal",
    email: "milan@123gmail.com",
    location: "Khandwa",
    isloggedin : false,
    [mysym]: "mykey1"
}
// Accessing the 
// method 1
//console.log(user1.college) //to access the values of data using keys
//METHOD 2
//console.log(user1["age"])
//console.log(user1[mysym])

//change
user1.email = "milan.gour@gmail.com" //changed the email

//to freeze not to change any key and its value
// Object.freeze(user1.age)
// user1.age = 33
// console.log(user1.age) 

user1.greeting = function(){
    console.log("Hello User 1")
}

user1.greeting2 = function(){
    console.log(`Hello ${this.name}`)
}

/*
console.log(user1.greeting()) // o/p hello user 1
console.log(user1.greeting2()) // o/p hello milan
console.log(user1.greeting2) // o/p function(ananoymous)
*/

// ************************************************************************ //

// using singleton or constructor
const tinderuser = new Object()
tinderuser.id = 123
tinderuser.name = "Sammy"
tinderuser.IsloggedIn = false

//console.log(tinderuser);

const regular = {
    fullname: {
        userfullname: {
            firstname: "Milan",
            lastname: "Gour"
        }
    }
}
//console.log(regular.fullname.userfullname.firstname) // o/p -> Milan 

const obj1 ={
    1: "a",
    2: "b"
}
const obj2 = {
    3: "c",
    4: "d"
}
// to concat the values of obj1 and obj 2
const obj3 = Object.assign({}, obj1, obj2)
//console.log(obj3)

const user = [
    {
        id: 1,
        email: "fokat@gmail.com"
    },
    {
        id: 2,
        email: "faltu@gmail.com"
    }
]
//console.log(user[1].email)

//console.log(Object.keys(tinderuser)) // it stored all the keys in an array so that we can use it by putting a loop
//console.log(Object.values(tinderuser)) // it stored all the vals in an array so that we can use it by putting a loop

//console.log(Object.entries(tinderuser)) // o/p => [ [ 'id', 123 ], [ 'name', 'Sammy' ], [ 'IsloggedIn', false ] ]
