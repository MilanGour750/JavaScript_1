const coding = ["JavaScript","Python","Java","Cpp"]

const value = coding.forEach( (item) => {
    //console.log(item);
    return item // this will povide the UNDEFINED because it dont returns the value
})

//console.log(item) // all the coding languages will be shown here

//filter operations
const num = [1,2,3,4,5,6,7,8,9]
const number = num.filter( (num) => {
    return num>4 // 5,6,7,8,9
})
//console.log(number)

//using for each not filter 
const finalarr = []

num.forEach( (nums) => {
    if(nums>4){
        finalarr.push(nums)
    }
})
//console.log(finalarr); // 5,6,7,8,9


// using MAPS
const mynums = [1,2,3,4,5,6,7,8,9,10]

// const a = mynums.map( (num) => {
//     return num+10 // op => 11,12......20 
// } )

//chaining
const a = mynums.map( (num)=> num*10 ).map((num) => num+1 )
//console.log(a); 

// reduce method 
const x = [1,2,3]

// long method using function 
// let mytotal = x.reduce( function(acc, currval){
//     console.log(`acc: ${acc} and currval ${currval} `)
//     return acc+currval
// }, 0)
// console.log(mytotal)

// op 
/*
acc: 0 and currval 1 
acc: 1 and currval 2 
acc: 3 and currval 3 
6
*/

// Short Method using arrow function 
// const ans = x.reduce((acc, curr) => acc+curr, 0) 

const cart = [
    {
        itemname: "js Course",
        price: 1299

    },
    {
        itemname: "Data science course",
        price: 10000
    },
    {
        itemname: "React Js",
        price: 3999
    }
]
const toPay = cart.reduce( (acc, item) => acc + item.price, 0)
console.log(toPay)



